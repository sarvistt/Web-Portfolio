<template>
    <div class="huh min-h-screen justify-center flex">
        <Header />
        <div class="flex flex-col max-w-5xl px-8">
            <Intro />
            <span>
                <h1 class="text-4xl font-bold text-center mt-20">About Me</h1>
            </span>
            <About />
            <span>
                <h1 class="text-4xl font-bold text-center mt-20 mb-5">Projects</h1>
            </span>
            <ProjectsIntro />
        </div>
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Intro from '../components/Intro.vue'
import About from '../components/About.vue'
import ProjectsIntro from '../components/ProjectsIntro.vue'

export default {
    name: 'Projects',
    components: {
        Header,
        Intro,
        About,
        ProjectsIntro
    },
}

</script>

<style scoped>

.huh {
  background-color: white;
  background-image: 
  radial-gradient(circle at 50% -20%, #80bdff, #a4c7ff, #c0d2ff, #d8dffe, #ebecfe, #f2f2fe, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%),
    radial-gradient(circle at 50% 120%, #80bdff, #a4c7ff, #c0d2ff, #d8dffe, #ebecfe, #f2f2fe, #f9f8ff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, transparent 75%);
}


</style>
