<script setup lang="ts">
import { useTaskStore } from '~/stores/task';
import type { StoreResponse } from '../utils/types'
import { themeChange } from 'theme-change'

onMounted(() => themeChange(false))

const taskStore = useTaskStore()
const tasks = ref<StoreResponse>(await taskStore.getTasks())
const emit = defineEmits(['filterTasks'])

async function getAllTasks() {
    tasks.value = await taskStore.getTasks()
    emit('filterTasks', tasks.value.data)
}

async function filterImportantTasks() {
    tasks.value = await taskStore.getTasks()
    const filteredTasks = tasks.value.data?.filter((task: Task) => task.is_important)
    emit('filterTasks', filteredTasks)
}

async function filterDoneTasks() {
    tasks.value = await taskStore.getTasks()
    const filteredTasks = tasks.value.data?.filter((task: Task) => task.is_done)
    emit('filterTasks', filteredTasks)
}
</script>
<template>
    <div class="drawer z-50">
        <input id="task-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar bg-base-100">
                <div class="flex-none lg:hidden">
                    <label for="task-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="flex-1">
                    <div class="flex space-x-4 items-center">
                        <h1 class="text-3xl font-bold">Task Planner</h1>
                        <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"><font-awesome-icon :icon="['fas', 'circle-half-stroke']" size="xl" /></button>
                    </div>
                </div>
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal px-1">
                        <li><a class="text-xl" @click="getAllTasks">
                                <span class="badge badge-lg">{{ taskStore.tasks.length }}</span>
                                All</a></li>
                        <li><a class="text-xl" @click="filterImportantTasks">
                                <span class="badge badge-lg">{{ taskStore.tasks?.filter((task: Task) =>
                                    task.is_important).length
                                }}</span>
                                Important
                            </a></li>
                        <li><a class="text-xl" @click="filterDoneTasks">
                                <span class="badge badge-lg">
                                    {{ taskStore.tasks?.filter((task: Task) => task.is_done).length }}
                                </span>
                                Done</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="drawer-side">
            <label for="task-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200">
                <!-- Sidebar content here -->
                <li><label for="task-drawer"><a class="text-xl" @click="getAllTasks">
                            <span class="badge badge-lg">{{ taskStore.tasks.length }}</span>
                            All</a></label></li>
                <li><label for="task-drawer"><a class="text-xl" @click="filterImportantTasks">
                            <span class="badge badge-lg">{{ taskStore.tasks?.filter((task: Task) =>
                                task.is_important).length
                            }}</span>
                            Important
                        </a></label></li>
                <li><label for="task-drawer"><a class="text-xl" @click="filterDoneTasks">
                            <span class="badge badge-lg">
                                {{ taskStore.tasks?.filter((task: Task) => task.is_done).length }}
                            </span>
                            Done</a></label></li>
            </ul>
        </div>
    </div>

    <!-- <div class="navbar bg-base-100">
        <div class="flex-1">
            <h1 class="text-3xl font-bold">Task Planner</h1>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><a class="text-xl" @click="getAllTasks">
                        <span class="badge badge-lg">{{ taskStore.tasks.length }}</span>
                        All</a></li>
                <li><a class="text-xl" @click="filterImportantTasks">
                        <span class="badge badge-lg">{{ taskStore.tasks?.filter((task: Task) => task.is_important).length
                        }}</span>
                        Important
                    </a></li>
                <li><a class="text-xl" @click="filterDoneTasks">
                        <span class="badge badge-lg">
                            {{ taskStore.tasks?.filter((task: Task) => task.is_done).length }}
                        </span>
                        Done</a></li>
            </ul>
        </div>
    </div> -->
</template>