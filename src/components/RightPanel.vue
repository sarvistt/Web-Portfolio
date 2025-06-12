<template>
    <div>
    <div class="grid grid-cols-2 grid-rows-1 gap-[400px]">
        <div class="flex items-center">
            <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 underline underline-offset-4 decoration-4 decoration-red-500">
                {{ activeTabComponent }}

            </h1>
        </div>
        <div>
            <div class="justify-end flex flex-col">
                <div class="border-b border-gray-200 border-l rounded-l-xl">
                    <ul class="flex flex-wrap text-lg font-medium text-center text-black">
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('about')">
                                <img src="../assets/about.svg" class="w-7 h-7" />
                                About
                            </button>
                        </li>
                        <!-- <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('contact')">
                                <img src="../assets/contact.svg" class="w-7 h-7" />
                                Contact
                            </button>
                        </li> -->
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('projects')">
                                <img src="../assets/project.svg" class="w-7 h-7" />
                                Projects
                            </button>
                        </li>
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('blog')">
                                <img src="../assets/blog.svg" class="w-7 h-7" />
                                Blog
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <div>
            <div class="shadow-lg rounded-lg p-4 mt-10 w-100 border-t-[1px] min-h-[500px]">
                <component :is="activeTabComponent" />
            </div>
        </div>
    </div>
    
        
</template>


<script>
import About from './About.vue'
import Projects from './ProjectsIntro.vue'
import Blog from './Blog.vue'

export default {
  name: 'RightPanel',
  data () {
    return {
      activeTab: 'about'
    }
  },
  components: {
    About,
    Projects,
    Blog
  },
  computed: {
    activeTabComponent() {
        console.log(this.activeTab.charAt(0).toUpperCase() + this.activeTab.slice(1))
      return this.activeTab.charAt(0).toUpperCase() + this.activeTab.slice(1)
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>