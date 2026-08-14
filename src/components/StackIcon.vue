<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { createMaterials } from '../three/wireframeHelpers'
import { buildStackIcon } from '../three/stackModels'

const props = defineProps({
  shape: { type: String, required: true }
})

const container = ref(null)
let renderer, scene, camera, animationId, icon
let t = Math.random() * 10

onMounted(() => {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 10)
  camera.position.set(0.6, 0.5, 1.6)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  const mats = createMaterials()
  icon = buildStackIcon(props.shape, mats)
  scene.add(icon)

  function animate() {
    animationId = requestAnimationFrame(animate)
    t += 0.006
    icon.rotation.y = t * 0.6
    icon.rotation.x = Math.sin(t * 0.5) * 0.15
    renderer.render(scene, camera)
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  renderer?.dispose()
  if (renderer?.domElement && container.value?.contains(renderer.domElement)) {
    container.value.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="w-full h-full"></div>
</template>
