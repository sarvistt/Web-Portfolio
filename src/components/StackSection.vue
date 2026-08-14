<script setup>
import SectionHead from './SectionHead.vue'
import StackIcon from './StackIcon.vue'

const stack = [
  { tag: 'C-01', name: 'TypeScript / JavaScript', cat: 'the best programming languages', shape: 'layers' },
  { tag: 'C-02', name: 'Vue & React', cat: 'Nuxt, Pinia, Bootstrap, Tailwind', shape: 'atom' },
  { tag: 'C-03', name: 'Python / C#', cat: 'and some C++', shape: 'hex' },
  { tag: 'C-04', name: 'SQL / MySQL', cat: 'Node.js, Laravel, flask', shape: 'database' },
  { tag: 'C-05', name: 'Docker / Azure', cat: 'Jenkins too', shape: 'containers' },
  { tag: 'C-06', name: 'Testing & HIL', cat: 'Pytest, Postman, SIL', shape: 'loop' },
  { tag: 'C-07', name: 'Git & GitHub Actions', cat: 'git push --force', shape: 'cube' },
  { tag: 'C-08', name: 'Linux', cat: 'Virtual Machines, Pi\'s', shape: 'cloud' }
]
</script>

<template>
  <section id="stack" class="px-6 md:px-11 py-20 md:py-[110px] border-t border-grid-strong relative">
    <SectionHead num="02" title="Stack" />

    <div class="grid grid-cols-2 md:grid-cols-4 gap-5" v-reveal>
      <div
        v-for="item in stack"
        :key="item.n"
        class="bg-panel border border-grid-strong p-4 flex flex-col items-center text-center
               transition-all duration-200 hover:border-cyan-dim hover:bg-panel-2 hover:-translate-y-1"
      >
        <div class="w-20 h-20 md:w-24 md:h-24">
          <StackIcon :shape="item.shape" />
        </div>
        <div class="mt-2 font-hand text-base text-orange tracking-wide">{{ item.tag }}</div>
        <div class="mt-1 font-mono text-[15px] tracking-wide">{{ item.name }}</div>
        <div class="mt-1.5 text-xs text-muted italic">{{ item.cat }}</div>
      </div>
    </div>
  </section>
</template>
