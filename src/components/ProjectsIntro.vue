<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 md:gap-16 w-full mx-3 md:mx-0">
        <div class="col-span-1 md:col-span-2 row-span-1 md:row-span-2 min-w-full mb-4 md:mb-0">
          <ProjectCard
            title="My Own Website!"
            description="This portfolio website is built with Vue.js and styled using Tailwind CSS, featuring a clean, responsive design with smooth animations, dark mode, and a dynamic project showcase to highlight skills and experience."
            link="https://github.com/sarvistt/Web-Portfolio"
          />
        </div>
        <div class="col-span-1 md:col-span-2 row-span-1 md:row-span-2 col-start-1 md:col-start-3">
          <ProjectCard
            title="Another Project in the works!"
            description="Coming soon, stay tuned!"
            link="https://github.com/sarvistt"
          />
        </div>
      </div>
    </div>

    <div class="flex w-full justify-center items-center md:mt-7">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 me-2 mb-2"
        @click="$router.push('/projects')"
      >
        See More About My Projects!
      </button>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
  name: 'Project',
  components: {
    ProjectCard,
  },
}
</script>
