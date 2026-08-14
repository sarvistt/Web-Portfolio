<script setup></script>

<template>
  <div class="fixed inset-0 z-0 overflow-hidden opacity-0 animate-sceneFadeIn">
    <div class="space-sky"></div>
    <div class="space-stars"></div>
    <div class="space-moon"></div>
  </div>
  <div class="space-scrim"></div>
  <div class="space-scanlines"></div>
  <div class="vignette-bg"></div>
  <div class="halftone-bg"></div>
  <div class="grain-bg"></div>

  <div class="corner-marks">
    <span class="fixed z-[1] border border-cyan-dim opacity-50 top-[17px] left-[15px] w-4 h-5 border-r-0 border-b-0 -rotate-1"></span>
    <span class="fixed z-[1] border border-cyan-dim opacity-50 top-[15px] right-[17px] w-5 h-4 border-l-0 border-b-0 rotate-[0.6deg]"></span>
    <span class="fixed z-[1] border border-cyan-dim opacity-50 bottom-[15px] left-[17px] w-5 h-[17px] border-r-0 border-t-0 rotate-[0.8deg]"></span>
    <span class="fixed z-[1] border border-cyan-dim opacity-50 bottom-[17px] right-[15px] w-4 h-[19px] border-l-0 border-t-0 -rotate-[0.5deg]"></span>
  </div>
</template>
