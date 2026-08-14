<script setup>
const links = [
  { href: '#about', idx: '01', label: 'About' },
  { href: '#stack', idx: '02', label: 'Stack' },
  { href: '#experience', idx: '03', label: 'Experience' },
  { href: '#work', idx: '04', label: 'Work' },
  { href: '#contact', idx: '05', label: 'Contact' }
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-11 py-5 backdrop-blur-md opacity-0 animate-fadeDown"
    style="background: linear-gradient(to bottom, rgba(13,11,16,0.88), transparent)"
  >
    <div class="flex items-center gap-2.5 font-mono font-bold tracking-wide text-sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="9" stroke="#5fb3ab" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#e8823c" />
        <circle cx="12" cy="12" r="2.4" stroke="#5fb3ab" />
      </svg>
      TIM SARVIS
    </div>
    <ul class="hidden md:flex gap-8 list-none">
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          class="text-muted no-underline font-mono text-xs tracking-wider uppercase transition-colors duration-200 hover:text-paper inline-flex items-center gap-1.5"
        >
          <span class="border border-cyan-dim text-cyan px-1 py-0.5 text-[10px] leading-none">{{ link.idx }}</span>
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
