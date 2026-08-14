<script setup>
import SectionHead from './SectionHead.vue'

const specs = [
  { section: 'EXPERIENCE', value: '3 YEARS w/ SOME INTERNSHIPS' },
  { section: 'FOCUS', value: 'FULLSTACK, SYSTEMS, EMBEDDED, TEST' },
  { section: 'EDUCATION', value: 'BSC COMP. ENG., U OF M' },
  { section: 'CURRENTLY', value: 'TEST ENGINEER @ PTX TRIMBLE' },
  { section: 'BASED IN', value: 'WINNIPEG, MB' }
]
</script>

<template>
  <section id="about" class="px-6 md:px-11 py-20 md:py-[110px] border-t border-grid-strong relative">
    <SectionHead num="01" title="About" />
    <div class="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14" v-reveal>
      <div class="text-muted text-base leading-[1.85] space-y-[18px]">
        <p class="max-w-[58ch]">
          Computer Engineering grad from the University of Manitoba, 
          based in Winnipeg. I’ve worked across both hardware and software,
           from building hardware-in-the-loop test rigs and embedded systems 
           to developing full-stack web applications.
        </p>
        <p class="max-w-[58ch]">
          These days I’m mostly in test engineering, spending my time writing automated tests, building '
          tractor emulation systems, and developing
          safety tests to make sure things behave as expected before they make it into the real world.      
        </p>
      </div>
      <div class="border border-grid-strong font-mono">
        <div
          v-for="spec in specs"
          :key="spec.k"
          class="flex justify-between px-5 py-4 border-b border-grid-strong text-[13px] last:border-b-0"
        >
          <span class="text-muted tracking-wide">{{ spec.section }}</span>
          <span class="text-cyan font-bold">{{ spec.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
