<script setup>
import BackgroundLayer from './components/BackgroundLayer.vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import StackSection from './components/StackSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <BackgroundLayer />
  <main class="relative z-[2]">
    <TheNav />
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
    <TheFooter />
  </main>
</template>
