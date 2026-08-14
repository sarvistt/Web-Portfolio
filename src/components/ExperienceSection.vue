<script setup>
import { ref, computed } from 'vue'
import SectionHead from './SectionHead.vue'
import ExperienceScene from './ExperienceScene.vue'

const experiences = [
  {
    key: 'valve',
    label: 'Valve',
    company: 'Antec Controls',
    role: 'Product Designer, Systems Developer',
    period: 'Summer 2022, May 2023 — June 2025',
    summary: 'I started at Antec Controls working on embedded systems and hardware, developing firmware features and building tools to automate testing and validation. I later moved into systems development, where I built web applications, automation tools, and CI/CD workflows that helped streamline everything from product configuration to testing and production.',
    bullets: [
      'Developed and tested embedded firmware for humidity and pressure control',
      'Built a web-based valve validation system (Vue, JavaScript, PHP) to automate performance testing and improve report accuracy',
      'Built several Vue platforms such as an quoting platform and a custom Excel web plugin'
    ]
  },
  {
    key: 'tractor',
    label: 'Tractor',
    company: 'PTx Trimble',
    role: 'Test Engineer',
    period: 'August 2025 — Present',
    summary: 'Automated testing for embedded controllers and writing tractor emulation software that lets developers test without a real tractor.',
    bullets: [
      'Built automated test frameworks for 3 embedded controllers — 100+ test cases, ~85% code coverage',
      'Designed Hardware-in-the-Loop (HIL) fixtures for real-time, hardware-validated testing',
      'Architected John Deere tractor emulation software for real time test capabilities that accurately represent a tractor'
    ]
  }
]

const timeline = [
  { role: 'Test Engineer', company: 'PTx Trimble — HIL Team', period: 'Aug 2025 — Present' },
  { role: 'Systems Developer', company: 'Antec Controls — Systems Team', period: 'Jun 2024 — Jun 2025' },
  { role: 'Product Designer', company: 'Antec Controls — Design Team', period: 'May 2023 — Jun 2024' },
  { role: 'Design Assistant', company: 'Antec Controls - Design Team', period: 'Summer 2022'},
  { role: 'Research Assistant', company: 'University of Manitoba', period: 'Summer 2021' },
  { role: 'BSc, Computer Engineering', company: 'University of Manitoba', period: 'Sep 2018 — Apr 2023' }
]

const active = ref('valve')
const activeExp = computed(() => experiences.find((e) => e.key === active.value))

function select(key) {
  active.value = key
}
</script>

<template>
  <section id="experience" class="px-6 md:px-11 py-20 md:py-[110px] border-t border-grid-strong relative">
    <SectionHead num="03" title="Where I've Worked" />

    <div class="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-center" v-reveal>
      <div class="flex flex-col items-center">
        <div class="relative w-full h-[260px] md:h-[320px]">
          <ExperienceScene :active="active" @select="select" />
        </div>
        <p class="mt-2 font-hand text-lg text-cyan-dim -rotate-1">click one to switch →</p>

        <div class="mt-4 flex gap-3">
          <button
            v-for="exp in experiences"
            :key="exp.key"
            type="button"
            @click="select(exp.key)"
            class="font-mono text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-200"
            :class="active === exp.key
              ? 'border-cyan text-cyan bg-panel'
              : 'border-grid-strong text-muted hover:text-paper hover:border-cyan-dim'"
          >
            {{ exp.label }}
          </button>
        </div>
      </div>

      <div class="border border-grid-strong bg-panel p-8">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-300"
          leave-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
        >
          <div :key="activeExp.key">
            <div class="font-mono text-[10px] text-orange tracking-wider">{{ activeExp.period }}</div>
            <h3 class="font-mono text-xl mt-2">{{ activeExp.role }}</h3>
            <div class="font-hand text-lg text-cyan mt-1">{{ activeExp.company }}</div>
            <p class="mt-4 text-muted text-sm leading-relaxed">{{ activeExp.summary }}</p>
            <ul class="mt-5 space-y-2.5">
              <li
                v-for="(bullet, i) in activeExp.bullets"
                :key="i"
                class="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-cyan-dim"
              >
                {{ bullet }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div class="mt-16 max-w-3xl mx-auto" v-reveal>
      <p class="font-hand text-lg text-cyan-dim text-center -rotate-1 mb-6">the full timeline, if you're scanning →</p>
      <div class="border-l border-grid-strong">
        <div v-for="item in timeline" :key="item.role + item.period" class="relative pl-6 pb-6 last:pb-0">
          <span class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-bg border border-cyan-dim"></span>
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <span class="font-mono text-sm">{{ item.role }}</span>
              <span class="text-muted text-sm"> — {{ item.company }}</span>
            </div>
            <span class="font-mono text-xs text-orange tracking-wide whitespace-nowrap">{{ item.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
