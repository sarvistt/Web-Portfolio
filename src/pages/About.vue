<template>
    <div class="huh min-h-screen flex flex-col">
        <Header class="px-8"/>
        <div class="flex flex-col max-w-5xl w-full mx-auto flex-1">
            <span class="w-full">
                <h1 class="text-4xl font-bold text-center mt-32 mb-5">About</h1>
            </span>
            <p class="text-center text-lg mb-10">Coming soon, stay tuned!</p>
        </div>
        <div class="w-full flex justify-center">
            <div class="max-w-5xl w-full px-8">
                <Footer class="mt-32"/>
            </div>
        </div>
    </div>
</template>



<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Blog',
    components: {
        Header,
        Footer
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