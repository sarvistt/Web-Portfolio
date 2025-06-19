<template>
  <div class="huh min-h-screen justify-center flex">
    <WebsiteHeader class="md:px-8 mx-5" />
    <div class="flex flex-col max-w-5xl">
      <Intro class="px-8" />
      <span>
        <h1 class="text-4xl font-bold text-center mt-32 mb-5 font-sf">About Me</h1>
      </span>
      <About :class="['transition-opacity duration-700', loaded ? 'opacity-100' : 'opacity-0']" />
      <div
        ref="fadeIntoView"
        :class="['transition-opacity duration-1000', visible ? 'opacity-100' : 'opacity-0']"
      >
        <span>
          <h1 class="text-4xl font-bold text-center mt-32 mb-5">Projects</h1>
        </span>
        <ProjectsIntro />
      </div>

      <WebsiteFooter class="mt-32" />
    </div>
  </div>
</template>

<script>

import WebsiteHeader from '../components/WebsiteHeader.vue'
import Intro from '../components/Intro.vue'
import About from '../components/AboutIntro.vue'
import ProjectsIntro from '../components/ProjectsIntro.vue'
import WebsiteFooter from '../components/WebsiteFooter.vue'

export default {
    name: 'Home',
    components: {
        WebsiteHeader,
        Intro,
        About,
        ProjectsIntro,
        WebsiteFooter
    },
    data () {
        return {
            loaded: false,
            visible: false
        }
    },
    mounted () {
        // Simulate a delay to show the fade-in effect
        setTimeout(() => {
            this.loaded = true
        }, 125) // Adjust the delay as needed

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                this.visible = true;
                observer.disconnect(); // Remove observer after first trigger
                }
            },
            { threshold: 0.35 }
            );
            observer.observe(this.$refs.fadeIntoView);
    }
}

</script>

<style scoped>
.huh {
  background-color: white;
  background-image: 
  radial-gradient(circle at 50% -20%, #FB923C, #ff987f, #ffb389, #ffc6e4, #fbecff, #f9f8ff, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%),
    radial-gradient(circle at 50% 120%, #FB923C, #ff987f, #ffb389, #ffc6e4, #fbecff, #f9f8ff, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
