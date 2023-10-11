<script setup lang="ts">
useHead({
    title: 'Welcome to Task Planner',
    meta: [
        { name: 'description', content: 'Get things done with your day, a list that refreshes everyday' }
    ]
})
import { useTaskStore } from '../stores/task'
import type { StoreResponse, Task } from '../utils/types'

const taskStore = useTaskStore()
const router = useRouter()

const tasks = ref<StoreResponse>({
    data: taskStore.tasks as Task[],
    ok: true,
})

tasks.value = await taskStore.getTasks()
if (tasks.value.data) {
    router.push('/tasks')
}

</script>
<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-screen">
                <h1 class="text-5xl lg:text-7xl font-bold">Welcome to Task Planner</h1>
                <p class="py-6 lg:text-xl">Get things done with your day, a list that refreshes everyday.</p>
                <AddTask @update-task-list="router.push('/tasks')" />
            </div>
        </div>
    </div>
</template>
