<script setup>
import LaptopScene from './LaptopScene.vue'
</script>

<template>
  <section id="top" class="min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center px-6 md:px-11 pt-[120px] md:pt-[140px] pb-20 gap-10 relative border-t border-grid-strong">
    <div class="opacity-0 animate-riseIn">
      <div class="flex items-center gap-2.5 mb-6 font-mono text-xs tracking-[0.18em] text-orange">
        <span class="relative flex h-2 w-2 shrink-0">
          <span class="absolute inline-flex h-full w-full rounded-full bg-orange opacity-60 animate-ping"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
        </span>
        TEST ENGINEER — HIL & EMBEDDED SYSTEMS
      </div>

      <h1
        class="font-mono font-extrabold uppercase leading-[1.02] tracking-tight text-[40px] md:text-[76px] [transform:scaleX(0.96)] origin-left"
        style="text-shadow: 3px 0 0 rgba(232,130,60,0.3), -3px 0 0 rgba(95,179,171,0.25)"
      >
        Building software
        <span class="text-cyan hero-underline pb-2.5 inline-block">since 2023</span>
      </h1>

      <p class="mt-6 max-w-[46ch] text-muted text-base leading-relaxed">
        Computer Engineering grad from the University of Manitoba, living somewhere between embedded firmware and full-stack web.
      </p>

      <div class="mt-9 flex gap-4 flex-wrap">
        <a href="#work" class="btn btn-primary">View Work →</a>
        <a href="#contact" class="btn">Get in touch</a>
      </div>
    </div>

    <div class="relative h-[340px] md:h-[520px] order-first md:order-none opacity-0 animate-riseInLate">
      <LaptopScene />
      <div class="absolute font-hand text-lg text-cyan-dim pointer-events-none top-[6%] right-[2%] text-right -rotate-3">
        2023 M2 MACBOOK<span class="annotation-line"></span>
      </div>
      <div class="absolute font-hand text-lg text-cyan-dim pointer-events-none bottom-[10%] -left-[2%] rotate-2">
        drag me<span class="annotation-line"></span>go on
      </div>
    </div>
  </section>
</template>
