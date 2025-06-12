<template>
  <header
    class="bg-white/60 shadow-xs fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 saturate-100 backdrop-blur-[10px] transition-colors"
  >
    <a
      href="/"
      class="flex items-center justify-center gap-1"
      aria-label="Home"
    >
      <!-- Replace with actual logo SVG or image -->
      <img src="../assets/init.png" alt="Logo" width="90" height="90" aria-hidden="true" />
    </a>


  <div class="flex items-center justify-between w-[35%] font-sf text-3xl text-gray-500">
    <nav class="flex items-center gap-8">
      <!-- Navbar content here -->
      <a href="/blog" class="hover:text-black">Blog</a>
      <a href="/projects" class="hover:text-black">Projects</a>
      <a href="/about" class="hover:text-black">About</a>
    </nav>

    <!-- Theme Switcher Placeholder -->
    <button class="px-2 py-1">Theme</button>
  </div>
</header>
</template>

