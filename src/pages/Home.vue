<template>
    <div class="huh min-h-screen justify-center flex">
        <Header class="px-8"/>
        <div class="flex flex-col max-w-5xl">
            <Intro class="px-8"/>
            <span>
                <h1 class="text-4xl font-bold text-center mt-32 mb-5 font-sf">About Me</h1>
            </span>
            <About />
            <span>
                <h1 class="text-4xl font-bold text-center mt-32 mb-5">Projects</h1>
            </span>
            <ProjectsIntro />

            <Footer class="mt-32"/>
        </div>
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Intro from '../components/Intro.vue'
import About from '../components/AboutIntro.vue'
import ProjectsIntro from '../components/ProjectsIntro.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Intro,
        About,
        ProjectsIntro,
        Footer
    },
}

</script>

<style scoped>
.huh {
  background-color: white;
  background-image: 
  radial-gradient(circle at 50% -20%, #FB923C, #ff987f, #ffb389, #ffc6e4, #fbecff, #f9f8ff, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%),
    radial-gradient(circle at 50% 120%, #FB923C, #ff987f, #ffb389, #ffc6e4, #fbecff, #f9f8ff, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%);
}
</style>
