<script setup lang="ts">
</script>
<template>
    <div class="mt-4">
        <div class="flex w-full gap-4">
            <div class="w-3/4">
                <div class="flex items-center bg-base-200 space-x-8 border-t-2 border-t-base-100 relative rounded-t-md">
                    <font-awesome-icon class="absolute top-0 right-0 mt-6 mr-6" :icon="['fas', 'pen']" />
                    <div class="p-7 border-r-2 border-r-base-100">
                        <div class="avatar">
                            <div class="w-28 rounded-full bg-base-300">
                                <NuxtImg src="https://api.dicebear.com/7.x/lorelei/svg?seed=reyven" alt="reyven-avatar"
                                    width="50" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h3 class="text-2xl font-bold">Reyven S. Biloy</h3>
                        <p class="text-lg">UI/UX Designer</p>
                        <div class="flex items-center space-x-2 mt-4">
                            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
                            <p class="text-sm">Bachelor of Science in Computer Science</p>
                        </div>
                        <div class="flex items-center space-x-14 mt-4">
                            <div class="flex items-center space-x-3">
                                <font-awesome-icon :icon="['fas', 'briefcase']" />
                                <p class="text-sm">12 years</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <font-awesome-icon :icon="['far', 'clock']" />
                                <p class="text-sm">Immediately</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                                <p class="text-sm text-success">35,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center space-x-12 p-4 bg-base-200 col-span-2 border-t-2 border-t-base-100 relative">
                    <font-awesome-icon class="absolute top-0 right-0 mt-6 mr-6" :icon="['fas', 'pen']" />
                    <div class="mt-8 mb-8">
                        <h1 class="text-xl font-bold">General Details</h1>
                        <div class="grid grid-cols-2 gap-32 mt-7">
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">Date of Birth</p>
                                <p class="text-lg">Gender</p>
                                <p class="text-lg">Civil Status</p>
                                <p class="text-lg">Citizenship</p>
                            </div>
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">07 July 1986</p>
                                <p class="text-lg">Male</p>
                                <p class="text-lg">Married</p>
                                <p class="text-lg">Filipino</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-12 p-4 bg-base-200 col-span-2 border-t-2 border-t-base-100 relative">
                    <font-awesome-icon class="absolute top-0 right-0 mt-6 mr-6" :icon="['fas', 'pen']" />
                    <div class="mt-8 mb-8">
                        <h1 class="text-xl font-bold">Professional Status</h1>
                        <div class="grid grid-cols-2 gap-32 mt-7">
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">Recent Job Title</p>
                                <p class="text-lg">Interview Availability</p>
                                <p class="text-lg">Current Month Salary(Gross)</p>
                                <p class="text-lg">Aloowance(Non-Taxable)</p>
                                <p class="text-lg">Pre-employment Leaves</p>
                                <p class="text-lg">Where can you work?</p>
                                <p class="text-lg">Estimate Travel Time to Office</p>
                                <p class="text-lg">Connection Type</p>
                                <p class="text-lg">Website / Portfolio</p>
                            </div>
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">Web Designer and Developer</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg text-success">Php 30,000.00</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">07 July - Birthday</p>
                                <p class="text-lg">Office and Home</p>
                                <p class="text-lg">15 mins</p>
                                <p class="text-lg">Globe Broadband</p>
                                <p class="text-lg">-</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center space-x-12 p-4 bg-base-200 col-span-2 border-t-2 border-t-base-100 relative rounded-b-md">
                    <font-awesome-icon class="absolute top-0 right-0 mt-6 mr-6" :icon="['fas', 'pen']" />
                    <div class="mt-8 mb-8">
                        <h1 class="text-xl font-bold">Preferences</h1>
                        <div class="grid grid-cols-2 gap-32 mt-7">
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">Day Shift</p>
                                <p class="text-lg">Mid Shift</p>
                                <p class="text-lg">Night Shift</p>
                                <p class="text-lg">English Only Policy (EOP)</p>
                                <p class="text-lg">Where did you hear us?</p>
                                <p class="text-lg">Marketing Permission</p>
                                <p class="text-lg">Referral</p>
                            </div>
                            <div class="col-span-1 space-y-4">
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                                <p class="text-lg">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/4 space-y-4">
                <div class="bg-base-200 p-6 rounded-md">
                    <h4 class="text-lg font-bold">Video Introduction</h4>
                    <div class="mt-2">
                        <NuxtImg src="https://nono-c.com/wp-content/uploads/2019/03/video-placeholder.jpg" />
                    </div>
                </div>
                <div class="bg-base-200 p-6 rounded-md">
                    <div class="grid grid-cols-2 items-center">
                        <h4 class="text-lg">Profile Completion</h4>
                        <p class="text-md text-success text-right">100%</p>
                    </div>
                    <progress class="progress progress-success" value="100" max="100"></progress>
                    <div class="mt-2">
                        <h4 class="text-md text-success font-bold text-center">Well done, Reyven S. Biloy!</h4>
                        <NuxtImg src="https://www.svgrepo.com/show/7725/gold-medal.svg" width="100"
                            class="mx-auto mb-4 mt-4" />
                        <p class="text-md">You have one of the strongest professional profile in our talent pool. Expect
                            progress on your application at any time soon.</p>
                    </div>
                </div>
                <div class="bg-base-200 p-6 rounded-md">
                    <div class="grid grid-cols-2 items-center">
                        <h4 class="text-lg">Profile Completion</h4>
                        <p class="text-md text-warning text-right">50%</p>
                    </div>
                    <progress class="progress progress-warning" value="50" max="100"></progress>
                    <div class="mt-2 ">
                        <div class="flex items-center space-x-2">
                            <font-awesome-icon :icon="['fas', 'caret-up']" size="xs" />
                            <p class="text-sm">Hide Recommendations</p>
                        </div>
                        <div class="mt-2 ml-5">
                            <p class="text-sm">Fill-up the following items to strengthen your profile. This can help us
                                matching your profile and increases your chances of landing into your desired role.</p>
                            <div class="mt-4 space-y-4">
                                <div class="flex items-center space-x-2">
                                    <font-awesome-icon :icon="['far', 'circle']" size="xs" />
                                    <p class="text-sm">Share <span class="text-info">Date of Birth</span></p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <font-awesome-icon :icon="['far', 'circle']" size="xs" />
                                    <p class="text-sm">Specify <span class="text-info">Current Month Salary</span></p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <font-awesome-icon :icon="['far', 'circle']" size="xs" />
                                    <p class="text-sm">Add one(1) <span class="text-info">Character Reference</span></p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <font-awesome-icon :icon="['far', 'circle']" size="xs" />
                                    <p class="text-sm">Add <span class="text-info">Current Address</span></p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <font-awesome-icon :icon="['far', 'circle']" size="xs" />
                                    <p class="text-sm">Add atleast five (5) items in <span class="text-info">Other
                                            Skills</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>