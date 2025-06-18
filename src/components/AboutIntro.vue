<template>
    <div>
        <div>
            <div class="grid grid-cols-3 grid-rows-4 gap-4 font-sf">
                <div class="col-span-2 row-span-2 flex">
                    <div class="block p-6 bg-white/20 border border-gray-200 rounded-lg shadow-sm ">
                       
                        <div class="flex items-center mb-4 pt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <h5 class="ml-3 text-slate-800 text-xl font-semibold">
                                Who am I?
                            </h5>
                        </div>
                        <p class="font-sf text-gray-700">
                            I’m a full-stack software engineer with 2 years of experience building web apps that are fast, clean, and easy to use.
                            I mostly work with Vue, PHP, and Python, and I really enjoy solving problems and turning ideas into things people actually want to use.
                        </p>
                    </div>
                </div>
                <div class="row-span-2 col-start-3 col-span-1 flex">
                    <div class="p-6 bg-white/20 border border-gray-200 rounded-lg shadow-sm w-full">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">Links</h5>
                        <p class="font-normal text-gray-700">
                            
                            <ul class=" space-y-1 text-gray-500 list-inside">
                                <li class="flex items-center mb-2 hover:text-black hover:cursor-pointer" @click="goToLink('https://github.com/sarvistt')">
                                    <img src="../assets/github-mark.svg" alt="github" class="w-8 h-8 mr-2" />
                                    Github
                                </li>
                                <li class="flex items-center mb-2 hover:text-black hover:cursor-pointer" @click="goToLink('https://www.linkedin.com/in/tim-sarvis/')">
                                    <img src="../assets/linkedin.svg" alt="linkedin" class="w-8 h-8 mr-2" />
                                    LinkedIn
                                </li>
                                <li class="flex items-center mb-2 hover:text-black hover:cursor-pointer" @click="goToLink('https://www.leetcode.com/sarvistt')">
                                   <img src="../assets/leetcode.svg" alt="leetcode" class="w-8 h-8 mr-2" />
                                    LeetCode
                                </li>
                                <li class="flex items-center mb-2 hover:text-black hover:cursor-pointer" @click="formEmail()">
                                    <img src="../assets/mail.svg" alt="mail" class="w-8 h-8 mr-2" />
                                    Email
                                </li>
                            </ul>
                        
                        
                        </p>
                    </div>
                </div>
                <div class="col-span-3 row-span-2 row-start-3">
                    <div class="p-6 bg-white/20 border border-gray-200 rounded-lg shadow-sm items-center">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">And what is my current stack....</h5>
                        <div class="font-normal text-gray-700 items-center">
                            <vue-marquee-slider
                                id="marquee-slider"
                                :speed="25000"
                                :width="100"
                                :space="50"
                                class="mt-5"
                                >
                                <img src="../assets/caraImages/vue.png" class="w-32 h-32">
                                <img src="../assets/caraImages/js.png" class="w-32 h-32">
                                <img src="../assets/caraImages/php.png" class="w-32 h-32">
                                <img src="../assets/caraImages/python.png" class="w-32 h-32">
                                <img src="../assets/caraImages/typescript.png" class="w-32 h-32">
                                <img src="../assets/caraImages/laravel.png" class="w-32 h-32">
                                <img src="../assets/caraImages/tailwind.png" class="w-32 h-32">
                                <img src="../assets/caraImages/pinia.svg" class="w-32 h-32">
                                <img src="../assets/caraImages/mysql.png" class="w-32 h-32">
                                <img src="../assets/caraImages/nuxt.svg" class="w-32 h-32">
                                <img src="../assets/caraImages/node.png" class="w-32 h-32">
                                <img src="../assets/caraImages/csharp.png" class="w-32 h-32">


                                </vue-marquee-slider>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-center items-center mt-6">
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                @click="this.$router.push('/about')">
                See More About Me!
            </button>
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
    },
    methods: {
        goToLink(url) {
            window.open(url, '_blank');
        },
        formEmail() {
            window.location.href = 'mailto:sar.com' // M<ake a new email before committing
        }
    }
}
</script>
