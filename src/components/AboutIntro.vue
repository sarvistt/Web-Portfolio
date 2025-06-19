<template>
  <div>
    <div>
      <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-4 font-sf mx-3 md:mx-0">
        <!-- Who am I? -->
        <div class="col-span-1 md:col-span-2 row-span-2 flex">
          <div class="block p-4 bg-white/20 border border-gray-200 rounded-lg shadow-sm w-full">
            <div class="flex items-center mb-4 pt-1">
              <svg
                class="w-6 h-6 text-slate-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h5 class="ml-3 text-slate-800 text-lg md:text-xl font-semibold">
                Who am I?
              </h5>
            </div>
            <p class="font-sf text-gray-700 text-base md:text-[16.5px]">
              I’m a full-stack software engineer with 3 years of experience building web apps that are fast, clean, and easy to use.
              I mostly work with Vue, PHP, and Python, and I really enjoy solving problems and turning ideas into things people actually want to use.
            </p>
          </div>
        </div>
        <!-- Some Links -->
        <div class="row-span-2 md:col-start-3 col-span-1 flex">
          <div class="p-4 bg-white/20 border border-gray-200 rounded-lg shadow-sm w-full">
            <div class="flex items-center mb-4 pt-1">
              <svg
                class="w-6 h-6 text-slate-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
              <h5 class="ml-3 text-slate-800 text-lg md:text-xl font-semibold">
                Some Links
              </h5>
            </div>
            <ul class="space-y-1 text-gray-500 list-inside">
              <li
                class="flex items-center mb-2 hover:text-black hover:cursor-pointer"
                @click="goToLink('https://github.com/sarvistt')"
              >
                <img
                  src="../assets/github-mark.svg"
                  alt="github"
                  class="w-7 h-7 md:w-8 md:h-8 mr-2"
                >
                Github
              </li>
              <li
                class="flex items-center mb-2 hover:text-black hover:cursor-pointer"
                @click="goToLink('https://www.linkedin.com/in/tim-sarvis/')"
              >
                <img
                  src="../assets/linkedin.svg"
                  alt="linkedin"
                  class="w-7 h-7 md:w-8 md:h-8 mr-2"
                >
                LinkedIn
              </li>
              <li
                class="flex items-center mb-2 hover:text-black hover:cursor-pointer"
                @click="goToLink('https://www.leetcode.com/sarvist')"
              >
                <img
                  src="../assets/leetcode.svg"
                  alt="leetcode"
                  class="w-7 h-7 md:w-8 md:h-8 mr-2"
                >
                LeetCode
              </li>
              <li
                class="flex items-center mb-2 hover:text-black hover:cursor-pointer"
                @click="formEmail()"
              >
                <img
                  src="../assets/mail.svg"
                  alt="mail"
                  class="w-7 h-7 md:w-8 md:h-8 mr-2"
                >
                Email
              </li>
            </ul>
          </div>
        </div>
        <!-- Current Stack -->
        <div class="col-span-1 md:col-span-3 row-span-2 md:row-start-3">
          <div class="p-4 md:p-6 bg-white/20 border border-gray-200 rounded-lg shadow-sm items-center">
            <div class="flex items-center mb-4 pt-1">
              <svg
                class="w-6 h-6 text-slate-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                />
              </svg>
              <h5 class="ml-3 text-slate-800 text-lg md:text-xl font-semibold">
                Current Stack!
              </h5>
            </div>
            <div class="font-normal text-gray-700 items-center">
              <vue-marquee-slider
                id="marquee-slider"
                :speed="25000"
                :width="100"
                :space="30"
                class="mt-5"
              >
                <img
                  src="../assets/caraImages/vue.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/js.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/php.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/python.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/typescript.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/laravel.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/tailwind.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/pinia.svg"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/mysql.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/nuxt.svg"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/node.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
                <img
                  src="../assets/caraImages/csharp.png"
                  class="w-20 h-20 md:w-32 md:h-32"
                >
              </vue-marquee-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center items-center mt-4 md:mt-6">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 me-2 mb-2"
        @click="$router.push('/about')"
      >
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
      window.location.href = 'mailto:sarvist@outlook.com'
    }
  }
}
</script>