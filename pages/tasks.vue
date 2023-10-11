<script setup lang="ts">
useHead({
    title: 'Task list - Task Planner',
    meta: [
        { name: 'description', content: 'Get things done with your day, a list that refreshes everyday' }
    ]
})
definePageMeta({
    middleware: [
        (async () => {
            const taskStore = useTaskStore()
            const tasks = await taskStore.getTasks()
            if (tasks.data?.length === 0) {
                return navigateTo('/')
            }
        })
    ],
})
import draggableComponent from 'vuedraggable';
import { useTaskStore } from '../stores/task'
import type { StoreResponse, Task, VueDragEvent } from '../utils/types'

const taskStore = useTaskStore()

const tasks = ref<StoreResponse>({
    data: taskStore.tasks as Task[],
    ok: true,
})
tasks.value = await taskStore.getTasks()
// Footnote: We can subscribe to the state of pinia instead of emit
// taskStore.$subscribe((mutation, state) => {
//     tasks.value.data = [...state.tasks] 
// })

async function moveTask(evt: VueDragEvent) {
    tasks.value = await taskStore.updateTask({
        ...evt.moved.element,
        //if new index is higher than old index = list item goes up otherwise list item goes down. 
        sort: evt.moved.newIndex > evt.moved.oldIndex ? (tasks.value.data as Task[])[evt.moved.newIndex - 1].sort + 1 : (tasks.value.data as Task[])[evt.moved.newIndex + 1].sort - 1
    })
}

const taskDelete = ref<Task>()
async function deleteTask() {
    if (taskDelete.value) {
        tasks.value = await taskStore.deleteTask(taskDelete.value.id)
    }
}
</script>
<template>
    <div class="justify-center items-center mx-auto w-10/12 ">
        <dialog id="taskDelete" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-2xl">Delete Task</h3>
                <h4 class=" text-xl py-4 text-center">"{{ taskDelete?.title }}"" will be permanently deleted</h4>
                <div class="modal-action justify-center">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <div class="space-x-4">
                            <button class="btn btn-error" @click="deleteTask">Delete</button>
                            <button class="btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
        <NavBar @filter-tasks="(e) => tasks.data = [...e]" />
        <SearchBar @update-task="(e) => tasks = e" />
        <draggableComponent v-model="tasks.data" item-key="id"
            class="space-y-4 max-h-[calc(100vh-17rem)] lg:max-h-[calc(100vh-18rem)] scrollbar-none  overflow-auto"
            v-if="tasks.ok" @change="moveTask($event)">
            <template #item="{ element }: { element: Task }">
                <div class="container">
                    <ListTask :="element" @update-task-list="(e) => tasks = e"
                        @prompt-task-deletion="(e) => taskDelete = e" />
                </div>
            </template>
            <template #footer>
                <div class="fixed bottom-0 lg:inset-x-0 h-52 max-w-5xl mx-auto w-10/12 pt-24">
                    <AddTask :="(tasks.data as Task[])[(tasks.data as Task[]).length - 1]"
                        @update-task-list="(e) => tasks = e" />
                </div>
            </template>
        </draggableComponent>
        <h1 class=" text-center text-2xl" v-else>Something went wrong, please refresh the page or try again later.</h1>
    </div>
</template>
