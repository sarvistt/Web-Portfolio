<script setup>
defineProps({
  num: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="flex items-center gap-4 mb-14" v-reveal>
    <span
      class="inline-flex items-center gap-1.5 border border-orange px-2.5 py-1 -rotate-1 shrink-0"
    >
      <span class="font-mono text-[10px] text-orange tracking-[0.2em]">SESSION</span>
      <span class="font-mono text-[10px] text-orange tracking-[0.2em] font-bold">{{ num }}</span>
    </span>
    <h2
      class="font-mono text-2xl md:text-[32px] uppercase tracking-wide [transform:scaleX(0.94)] origin-left"
      style="text-shadow: 2px 0 0 rgba(232,130,60,0.35), -2px 0 0 rgba(95,179,171,0.3)"
    >
      {{ title }}
    </h2>
    <span class="section-rule"></span>
  </div>
</template>
