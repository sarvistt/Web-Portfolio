<template>
    <div class="flex flex-col justify-center items-center mt-4">
      <ProfilePicture />
      <h1 class="mt-3 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
        Tim Sarvis
      </h1>
      <div class="mt-3 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Systems Developer
      </div>

      <div class="relative flex py-5 items-center w-full p-10">
        <div class="flex-grow border-t border-black"></div>
        <span class="flex-shrink mx-2 text-black">Links</span>
        <div class="flex-grow border-t border-black"></div>
      </div>
      
      <Links />

    </div>
</template>

<script>
import ProfilePicture from './ProfilePicture.vue';
import Links from './Links.vue'
export default {
  name: {

  },
  components: {
    ProfilePicture,
    Links
  }
}
</script>