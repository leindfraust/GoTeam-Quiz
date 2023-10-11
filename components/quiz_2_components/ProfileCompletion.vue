<script setup lang="ts">
</script>
<template>
    <div class="w-screen">
        <div class="container bg-base-200 p-4 rounded-md">
            <div class="mr-2 ml-2 p-2 relative">
                <div class="flex items-center absolute top-0 right-0 space-x-4">
                    <font-awesome-icon :icon="['far', 'square']" />
                    <p class="text-sm">Don't remind me again</p>
                    <font-awesome-icon :icon="['fas', 'x']" size="xs" class="text-error" />
                </div>
                <h3 class="text-xl">Welcome, Reyven!</h3>
                <p class="text-md"><span class="text-success">You are almost done!</span> To further strengthen your
                    profile, it is highly recommended for you to complete the 4 sections of your application.</p>
            </div>
            <div class="divider divider-vertical"></div>
            <div class="grid grid-cols-4 gap-4">
                <div class="flex items-center space-x-2">
                    <font-awesome-icon :icon="['far', 'user']" size="lg" class=" w-6 bg-base-100 rounded-full p-4" />
                    <div class="container">
                        <h4 class="text-md">Applicant Profile</h4>
                        <div class="flex items-center space-x-2">
                            <progress class="progress progress-warning" value="75" max="100"></progress>
                            <p class="text-warning">75%</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <font-awesome-icon :icon="['far', 'file-lines']" size="lg" class="w-6 bg-base-100 rounded-full p-4" />
                    <div class="container">
                        <h4 class="text-md">Resume / CV</h4>
                        <div class="flex items-center space-x-2">
                            <progress class="progress progress-error" value="50" max="100"></progress>
                            <p class="text-error">50%</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <font-awesome-icon :icon="['fas', 'chart-column']" size="lg" class="w-6 bg-base-100 rounded-full p-4" />
                    <div class="container">
                        <h4 class="text-md">Assessment Score</h4>
                        <div class="flex items-center space-x-2">
                            <progress class="progress progress-error" value="0" max="100"></progress>
                            <p class="text-error">0%</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <font-awesome-icon :icon="['fas', 'video']" size="lg" class="w-6 bg-base-100 rounded-full p-4" />
                    <div class="container">
                        <h4 class="text-md">Video Introduction</h4>
                        <div class="flex items-center space-x-2">
                            <progress class="progress progress-error" value="0" max="100"></progress>
                            <p class="text-error">0%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Quiz2ComponentsProfileDetails />
    </div>
</template>