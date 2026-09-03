<script setup>
import SectionHead from './SectionHead.vue'

const projects = [
  {
    tag: 'PROJECT / 01',
    title: 'Marvel Legendary Solo Emulator',
    desc: 'Fully functional emulator for the Marvel Legendary board game! Created with Vue, TypeScript, and TailwindCSS. Features include a full solo play, a custom draft mode, and a rogue like mode!',
    link: 'https://legendarysolo.netlify.app/',
    tech: ['Vue', 'TypeScript', 'Tailwind'],
    rotate: 'rotate-[0.4deg]'
  },
  {
    tag: 'PROJECT / 02',
    title: 'Second Project',
    desc: 'A second project that is not far behind the first one.',
    tech: ['Vue', 'JavaScript'],
    rotate: '-rotate-[0.6deg]'
  },
]
</script>

<template>
  <section id="work" class="px-6 md:px-11 py-20 md:py-[110px] border-t border-grid-strong relative">
    <SectionHead num="04" title="Selected Work" />
    <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7" v-reveal>
      <div
        v-for="project in projects"
        :key="project.title"
        :class="project.rotate"
        class="relative border border-grid-strong p-[30px] bg-panel transition-all duration-200 hover:border-cyan-dim hover:-translate-y-1
               before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:border-t before:border-l before:border-cyan before:-top-px before:-left-px before:opacity-0 before:transition-opacity before:duration-200
               after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:border-b after:border-r after:border-cyan after:-bottom-px after:-right-px after:opacity-0 after:transition-opacity after:duration-200
               hover:before:opacity-100 hover:after:opacity-100"
      >
        <div class="font-mono text-[10px] text-orange tracking-wider">{{ project.tag }}</div>
        <h3 class="font-mono mt-3.5 text-lg">{{ project.title }}</h3>
        <p class="mt-3 text-muted text-sm leading-relaxed">
          {{ project.desc }}
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
            class="text-cyan underline underline-offset-4 decoration-cyan/70 transition-colors hover:text-cyan-light"
          >
            {{ project.link }}
          </a>
        </p>
        <div class="mt-5 flex gap-2.5 flex-wrap">
          <span class="chip" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
