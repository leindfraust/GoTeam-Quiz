<script setup lang="ts">
import { useTaskStore } from '~/stores/task';

const route = useRoute()
const router = useRouter()

const taskStore = useTaskStore()
const searchInput = ref(route.query.search)
const searchTimeout = ref<NodeJS.Timeout>()
const emit = defineEmits(['updateTask'])

async function searchTask() {
    if (searchInput.value) {
        const tasks = await taskStore.searchTask(searchInput.value as string)
        emit('updateTask', tasks)
    } else {
        const tasks = await taskStore.getTasks()
        emit('updateTask', tasks)
    }
}

watchEffect(() => {
    router.push({
        query: {
            search: searchInput.value
        }
    })
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value)
        searchTimeout.value = undefined
    }
    searchTimeout.value = setTimeout(searchTask, 500)

})

</script>
<template>
    <div class="max-w-5xl mx-auto">
        <div class="form-control mb-4 w-full">
            <label class="input-group">
                <span><font-awesome-icon :icon="['fas', 'search']" size="2xl" /></span>
                <input v-model="searchInput" type="text" placeholder="Search"
                    class="input input-bordered input-lg join-item w-full" />
            </label>
        </div>
    </div>
</template>