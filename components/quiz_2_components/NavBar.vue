<script setup lang="ts">
const isDarkMode = ref<boolean>(false)
onMounted(() => isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
</script>
<template>
    <div class="navbar bg-base-200">
        <div class="navbar-start items-center ml-7">
            <div class="flex items-center">
                <a :href="!isDarkMode ? 'https://go.team/wp-content/uploads/2022/05/goteam-logo-dark.png' : 'https://go.team/wp-content/uploads/2022/05/goteam-logo-with-tag-2.png'"
                    class="cursor-pointer">
                    <NuxtImg
                        :src="!isDarkMode ? 'https://go.team/wp-content/uploads/2022/05/goteam-logo-dark.png' : 'https://go.team/wp-content/uploads/2022/05/goteam-logo-with-tag-2.png'"
                        width="150" alt="goteam-logo" />
                </a>
                <div class="ml-12">
                    <ul class="flex items-center mr-2 space-x-4">
                        <li><a>Careers</a></li>
                        <li><a>Find your role</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="navbar-center flex">
            <div class="form-control w-96">
                <label class="input-group">
                    <input type="text" placeholder="Type for job title or role"
                        class="input input-bordered input-md join-item rounded-l-full  w-full" />
                    <span class="flex items-center space-x-2 rounded-r-full"> <font-awesome-icon :icon="['fas', 'search']"
                            size="xl" />
                        <p>Search</p>
                    </span>
                </label>
            </div>
        </div>
        <div class="navbar-end">
            <div class="flex items-center space-x-5 mr-7">
                <div class="flex-none">
                    <p class="text-md text-right">
                        Reyven S. Biloy
                    </p>
                    <p class="text-sm">reyvenb@gmail.com</p>
                </div>
                <div class="avatar">
                    <div class="w-8 rounded-full bg-base-300">
                        <NuxtImg src="https://api.dicebear.com/7.x/lorelei/svg?seed=reyven" alt="reyven-avatar"
                            width="50" />
                    </div>
                </div>
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </div>
        </div>
    </div>
</template>