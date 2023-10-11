<script setup lang="ts">
</script>
<template>
    <div class="max-w-xs">
        <div class="flex items-center justify-start btn btn-ghost btn-active">
            <div class="flex items-center space-x-4">
                <font-awesome-icon :icon="['far', 'user']" width="14" />
                <div>Profile</div>
            </div>
            <div class="ml-auto">
                <font-awesome-icon :icon="['fas', 'caret-right']" width="14" />
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4">
                <font-awesome-icon :icon="['far', 'file-lines']" width="14" />
                <div>Resume / CV</div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4">
                <font-awesome-icon :icon="['fas', 'chart-column']" width="14" />
                <div>Assessment</div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4 ">
                <font-awesome-icon :icon="['fas', 'video']" width="14" />
                <div>Video Script</div>
            </div>
        </div>

        <div class=" divider divider-vertical"></div>

        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4 w-48">
                <font-awesome-icon :icon="['fas', 'suitcase']" width="14" />
                <div>Application Tracking</div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4 ">
                <font-awesome-icon :icon="['far', 'bookmark']" width="14" />
                <div>Bookmarked</div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4">
                <font-awesome-icon :icon="['far', 'bell']" width="14" />
                <div>Notifications <span class="badge badge-error">2</span></div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4 ">
                <font-awesome-icon :icon="['fas', 'wave-square']" width="14" />
                <div>Activity Logs</div>
            </div>
        </div>
        <div class="flex items-center justify-start  btn btn-ghost">
            <div class="flex items-center space-x-4 ">
                <font-awesome-icon :icon="['fas', 'gear']" width="14" />
                <div>Settings</div>
            </div>
        </div>
        <div class="mt-2">
            <p class="text-sm text-slate-500">Copyright 2018-2023. All Rights Reserved.</p>
            <div class="flex items-center space-x-4">
                <p class="text-sm text-info">Terms of Use</p>
                <p class="text-sm text-info">Privacy Policy</p>
            </div>
        </div>
    </div>
</template>