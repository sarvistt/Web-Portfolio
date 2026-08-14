// v-reveal: fades/slides an element in the first time it enters the viewport.
// Usage: <div class="section-head" v-reveal>...</div>
export default {
  mounted(el) {
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    el.__revealObserver__ = io
  },
  unmounted(el) {
    el.__revealObserver__?.disconnect()
  }
}
