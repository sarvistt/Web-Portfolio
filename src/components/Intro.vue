<template>
  <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 mx-auto w-full mt-32 md:mt-[130px] max-h-none md:max-h-[250px] px-4">
    <div class="flex-1 flex items-center justify-center md:justify-start w-full">
      <span class="text-xl sm:text-2xl md:text-3xl font-bold font-sf leading-snug md:leading-[1.5] tracking-tight text-gray-900 w-full md:w-[80%] text-center md:text-left">
        Hi, I'm Tim! 
        <br> 
        A Full Stack Engineer building
        <transition
          name="fade"
          mode="out-in"
        >
          <span
            :key="currentIndex"
            class="gradient-text"
          >
            {{ changedAdjective }}
          </span>
        </transition>
        applications using Vue and much more!
      </span>
    </div>
    <div class="flex items-center justify-center mb-6 md:mb-0 md:ml-11">
      <ProfilePicture />
    </div>
  </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue';

export default {
    name: 'Intro',
    components: {
        ProfilePicture
    },
    data () {
        return {
            listOfAdjectives: ['Amazing', 'Stunning', 'Interesting?', 'Quirky?'],
            currentIndex: 0
        }
    },
    computed: {
        changedAdjective() {
            console.log('current index', this.currentIndex)
            return this.listOfAdjectives[this.currentIndex]
        }
    },
    mounted() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.listOfAdjectives.length
        }, 2000)
    }
}
</script>

<style>
.gradient-text {
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient colors */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>