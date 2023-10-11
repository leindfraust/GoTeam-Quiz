<script setup lang="ts">
import { useTaskStore } from '~/stores/task';
import { useUserStore } from '~/stores/user'
import type { Task, User, StoreResponse } from '../utils/types';

const task = defineProps<Task>()
const taskStore = useTaskStore()
const userStore = useUserStore()
const emit = defineEmits(['updateTaskList', 'promptTaskDeletion'])
const getUsers = ref<StoreResponse>(await userStore.getUsers())
const searchUsers = ref('')
const users = computed(() => {
    return getUsers.value.data?.filter(user => (user as User).name.toLowerCase().includes(searchUsers.value.toLowerCase()))
})
const editing = ref<boolean>(false)

async function toggleTaskDone() {
    if (!editing.value) {
        const taskUpdate = await taskStore.updateTask({
            ...task,
            is_done: !task.is_done
        })

        emit('updateTaskList', taskUpdate)
    }
}

const inputTitle = ref<HTMLInputElement>()
async function toggleTaskEdit() {
    editing.value = !editing.value
    await nextTick()
    inputTitle.value?.focus()
}

async function updateTask() {
    editing.value = false
    const taskUpdate = await taskStore.updateTask({
        ...task,
        title: inputTitle.value?.value as string
    })
    emit('updateTaskList', taskUpdate)
}

async function assignUserTask(user: User) {
    const taskUpdate = await taskStore.updateTask({
        ...task,
        assignee: user
    })
    emit('updateTaskList', taskUpdate)
}

async function toggleTaskImportance() {
    const taskUpdate = await taskStore.updateTask({
        ...task,
        is_important: !task.is_important
    })

    emit('updateTaskList', taskUpdate)
}

async function promptTaskDeletion() {
    const modal = document.getElementById('taskDelete') as HTMLDialogElement
    modal.show()
    emit('promptTaskDeletion', task)
}

</script>
<template>
    <div class="flex items-center max-w-5xl mx-auto bg-base-200 p-6 rounded-2xl">
        <div class="flex-1 cursor-move">
            <div class="flex items-center space-x-4">
                <font-awesome-icon :icon="['fas', task.is_done ? 'circle-check' : 'circle']" size="xl"
                    class="cursor-pointer" @click="toggleTaskDone" />
                <h3 class="text-xl cursor-text break-words max-w-[25vw] lg:max-w-md" @click="toggleTaskEdit"
                    :class="{ 'line-through': task.is_done }" v-if="!editing"> {{ task.title }}</h3>
                <input ref="inputTitle" type="text" placeholder="" :value="task.title"
                    class="input input-ghost join-item w-full" @blur="updateTask" v-else />
            </div>
        </div>
        <div class="flex-none">
            <div class="flex items-center space-x-4">
                <div class="dropdown dropdown-bottom cursor-pointer flex items-center">
                    <div tabindex="0">
                        <font-awesome-icon :icon="['fas', 'user-plus']" v-if="Object.keys(task.assignee).length === 0" />
                        <div class="avatar" v-else>
                            <div class="w-10 rounded-full">
                                <NuxtImg :src="(task.assignee as User).avatar" />
                            </div>
                        </div>
                    </div>
                    <div tabindex="0">
                        <ul
                            class="dropdown-content z-[1] menu max-h-80 overflow-auto flex flex-nowrap p-2 shadow bg-base-100 rounded-box w-52">
                            <label class="input-group sticky top-0 z-50">
                                <span><font-awesome-icon :icon="['fas', 'search']" /></span>
                                <input v-model="searchUsers" type="text" placeholder="Search"
                                    class="input input-md input-bordered join-item w-full" />
                            </label>
                            <li v-for="user in (users as User[])">
                                <a @click="assignUserTask(user)">
                                    <div class="flex items-center justify-center space-x-4">
                                        <div class="avatar">
                                            <div class=" w-10 rounded-full">
                                                <NuxtImg :src="user.avatar" />
                                            </div>
                                        </div>
                                        <p class=" text-sm">{{ user.name }}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <font-awesome-icon :icon="[task.is_important ? 'fas' : 'far', `star`]" size="xl"
                    class="cursor-pointer text-yellow-300" @click="toggleTaskImportance" />
                <font-awesome-icon :icon="['fas', 'trash']" size="xl" class="cursor-pointer text-error"
                    @click="promptTaskDeletion" />
            </div>
        </div>
    </div>
</template>
