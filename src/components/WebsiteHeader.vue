<template>
  <header
    class="bg-white/60 shadow-md fixed inset-x-0 top-4 z-40 md:mx-auto flex h-[60px] md:max-w-5xl items-center justify-between rounded-2xl saturate-100 backdrop-blur-[10px] transition-colors "
  >
    <a
      href="/"
      class="flex items-center justify-center gap-1"
      aria-label="Home"
    >
      <img
        src="../assets/init.svg"
        alt="Logo"
        width="90"
        height="90"
        aria-hidden="true"
      >
    </a>
    <div class="flex items-center justify-between md:w-[35%] font-sf text-lg text-gray-500 mr-3">
      <nav class="flex items-center md:gap-8 gap-3">
        <a
          href="/blog"
          class="hover:text-black "
        >Blog</a>
        <a
          href="/projects"
          class="hover:text-black "
        >Projects</a>
        <a
          href="/about"
          class="hover:text-black "
        >About</a>
      </nav>

      <!-- <label class="items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      v-model="isDark"
      @click="toggleTheme"
      :checked="isDark"
      aria-label="Toggle dark mode"
    >
    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  </label> -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDark: false
    }
  },
  mounted() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDark = true
      document.documentElement.classList.add('dark')
    }
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
}
</script>