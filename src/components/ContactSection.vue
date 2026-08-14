<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const listOfAdjectives = ['Amazing', 'Stunning', 'Interesting?', 'Quirky?']
const currentIndex = ref(0)

const changedAdjective = computed(() => {
  return listOfAdjectives[currentIndex.value]
})

let interval

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % listOfAdjectives.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section
    id="contact"
    class="px-6 md:px-11 pt-20 md:pt-[110px] pb-36 border-t border-grid-strong text-center relative"
  >
    <div v-reveal>
      <h2 class="font-mono uppercase leading-[1.1] text-[30px] md:text-[58px]">
        Lets code<br>
        something

        <span class="text-cyan adjective-wrapper">
          <Transition name="adjective" mode="out-in">
            <span :key="changedAdjective">
              {{ changedAdjective }}
            </span>
          </Transition>
        </span>
      </h2>

      <p class="text-muted mx-auto mt-5 mb-8 max-w-[48ch]">
        If you think our interests align, or just want to chat, feel free to reach out!
      </p>

      <div class="flex justify-center gap-4 flex-wrap">
        <a
          class="btn"
          href="https://github.com/sarvistt"
          target="_blank"
          rel="noopener"
        >
          GitHub ↗
        </a>

        <a
          class="btn"
          href="https://linkedin.com/in/tim-sarvis"
          target="_blank"
          rel="noopener"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adjective-wrapper {
  display: inline-block;
  position: relative;
}

.adjective-enter-active,
.adjective-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.adjective-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.adjective-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>