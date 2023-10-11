import { defineStore } from 'pinia'
import type { StoreResponse, Task } from '../utils/types'

const taskAPIBaseUrl = 'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks'

export const useTaskStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([])
    async function getTasks() {
        try {
            const data = await fetch(taskAPIBaseUrl)
            const json = await data.json()
            tasks.value = await json
            return {
                data: tasks.value.sort((a, b) => a.sort - b.sort),
                ok: true
            } as StoreResponse
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    async function searchTask(keyword: string) {
        try {
            const data = await fetch(`${taskAPIBaseUrl}?search=${keyword}`)
            const json = await data.json()
            const tasks = await json as Task[]
            return {
                data: tasks.sort((a, b) => a.sort - b.sort),
                ok: true
            } as StoreResponse
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    async function addTask(task: Task) {
        try {
            await fetch(taskAPIBaseUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task)
            })
            return getTasks()
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    async function updateTask(task: Task) {
        try {
            await fetch(`${taskAPIBaseUrl}/${task.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task)
            })
            return getTasks()
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    async function deleteTask(id: string) {
        try {
            await fetch(`${taskAPIBaseUrl}/${id}`, {
                method: 'DELETE'
            })
            return getTasks()
        } catch (err) {
            return {
                error: err,
                ok: false
            } as StoreResponse
        }
    }
    return { tasks, getTasks, searchTask, addTask, updateTask, deleteTask }
})
