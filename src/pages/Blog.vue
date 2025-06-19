<template>
  <div class="huh min-h-screen flex flex-col">
    <WebsiteHeader class="md:px-8 mx-5" />
    <div class="flex flex-col max-w-5xl w-full mx-auto flex-1">
      <span class="w-full">
        <h1 class="text-4xl font-bold text-center mt-32 mb-5">Blog</h1>
      </span>
      <p class="text-center text-lg mb-10">
        Coming soon, stay tuned!
      </p>
    </div>
    <div class="w-full flex justify-center">
      <div class="max-w-5xl w-full px-8">
        <WebsiteFooter class="mt-32" />
      </div>
    </div>
  </div>
</template>



<script>
import WebsiteHeader from '../components/WebsiteHeader.vue'
import WebsiteFooter from '../components/WebsiteFooter.vue'

export default {
    name: 'Blog',
    components: {
        WebsiteHeader,
        WebsiteFooter
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