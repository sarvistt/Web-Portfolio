<template>
    <div class="grid grid-cols-2 grid-rows-1 gap-3">
        <div class="bg-red-100 flex items-center">
            <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900">
                {{ activeTabComponent }}
            </h1>
        </div>
        <div>
            <div class="justify-end flex flex-col">
                <div class="border-b border-gray-200 border-l rounded-l-xl">
                    <ul class="flex flex-wrap text-sm font-medium text-center text-black">
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('about')">
                                <img src="../assets/about.svg" class="w-5 h-5" />
                                About
                            </button>
                        </li>
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('resume')">
                                <img src="../assets/about.svg" class="w-5 h-5" />
                                Resume
                            </button>
                        </li>
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('projects')">
                                <img src="../assets/about.svg" class="w-5 h-5" />
                                Projects
                            </button>
                        </li>
                        <li class="me-2">
                            <button class="flex items-center justify-center p-4 rounded-t-lg gap-2" @click="changeTab('contact')">
                                <img src="../assets/about.svg" class="w-5 h-5" />
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
        
</template>


<script>
export default {
  name: 'RightPanel',
  data () {
    return {
      activeTab: 'about'
    }
  },
  computed: {
    activeTabComponent() {
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