<template>
    <div>
        <div class="mt-5">
            <div class="grid grid-cols-3 grid-rows-4 gap-4">
                <div class="col-span-2 row-span-2 flex">
                    <div class="block p-6 bg-white/30 border border-gray-200 rounded-lg shadow-sm ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">But who am I....</h5>
                        <p class="font-normal text-gray-700">
                            I’m a full-stack software engineer with 2 years of experience building web apps that are fast, clean, and easy to use.
                            I mostly work with Vue, PHP, and Python, and I really enjoy solving problems and turning ideas into things people actually want to use.
                        </p>
                    </div>
                </div>
                <div class="row-span-2 col-start-3 flex">
                    <div class="block p-6 bg-white/30 border border-gray-200 rounded-lg shadow-sm ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Links</h5>
                        <p class="font-normal text-gray-700">
                            
                            <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li class="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                    </svg>
                                    Github
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                    </svg>
                                    LinkedIn
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                    </svg>
                                    LeetCode
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                    </svg>
                                    Email
                                </li>
                            </ul>
                        
                        
                        </p>
                    </div>
                </div>
                <div class="col-span-3 row-span-2 row-start-3">
                    <div class="block p-6 bg-white/30 border border-gray-200 rounded-lg shadow-sm ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">And what is my current stack....</h5>
                        <p class="font-normal text-gray-700">
                            <vue-marquee-slider
                                id="marquee-slider"
                                :speed="10000"
                                :width="100"
                                :space="50"
                                >
                                <img src="https://app.imgforce.com/images/user/zrC_1622176244_logo-black-120.png" />
                                <img src="https://app.imgforce.com/images/user/O1j_1670884991_js-logo.png" />
                                <img src="https://app.imgforce.com/images/user/Igx_1670885749_vue-logo.png" />
                                <img src="https://app.imgforce.com/images/user/TPs_1670885858_react-logo.png" />
                                <img src="https://app.imgforce.com/images/user/jY4_1670885309_angular-logo.png" />
                                </vue-marquee-slider>
                        </p>
                    </div>
                </div>
            </div>
        </div>
           
    </div>
</template>

<script>
import { VueMarqueeSlider } from 'vue3-marquee-slider'
import '../../node_modules/vue3-marquee-slider/dist/style.css'

export default {
    name: 'AboutPage',
    components: {
        VueMarqueeSlider
    }
}
</script>
