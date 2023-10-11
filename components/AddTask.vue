<script setup lang="ts">
import { useTaskStore } from '../stores/task'
import type { Task } from '../utils/types'

const taskStore = useTaskStore()

const title = ref('')
const lastTask = ref<Task>(taskStore.tasks.sort((a, b) => a.sort - b.sort)[taskStore.tasks.length - 1])
const emit = defineEmits(['updateTaskList'])
const addInputFocused = ref<boolean>(false)

async function addTask() {
    const tasks = await taskStore.addTask({
        title: title.value,
        created_at: new Date().toString(),
        assignee: {},
        is_done: false,
        is_important: false,
        sort: lastTask.value.sort + 1,
        id: lastTask.value.id + 1
    })
    title.value = ''

    emit('updateTaskList', tasks)
}

const taskSuggestion = ref('Try typing "Finish debugging latest feature by Saturday 12 PM"')
</script>
<template>
    <div class="w-full">
        <div class="form-control">
            <label class="input-group">
                <span><font-awesome-icon :icon="addInputFocused ? ['far', 'circle'] : ['fas', 'plus']" size="2xl" /></span>
                <input v-model="title" type="text" :placeholder="addInputFocused ? taskSuggestion : 'Add a task'"
                    class="input input-bordered input-lg join-item w-full" @keyup.enter="addTask"
                    @focusin="addInputFocused = true" @focusout="addInputFocused = false" />
            </label>
            <label class="label">
                <span>Press enter to add task.</span>
            </label>
        </div>
    </div>
</template>