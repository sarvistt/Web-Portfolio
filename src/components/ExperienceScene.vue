<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { createMaterials, buildValve, buildTractor } from '../three/experienceModels'

const props = defineProps({
  active: { type: String, required: true }
})
const emit = defineEmits(['select'])

const container = ref(null)
let renderer, scene, camera, animationId
let valveGroup, tractorGroup
let valvePick, tractorPick
let matsValve, matsTractor
let t = 0

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

function buildScene(width, height) {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
  camera.position.set(0, 0.4, 5.6)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.cursor = 'pointer'
  container.value.appendChild(renderer.domElement)

  // separate material sets so each model can be dimmed/highlighted independently
  matsValve = createMaterials()
  matsTractor = createMaterials()

  valveGroup = buildValve(matsValve)
  valveGroup.position.set(-1.55, -0.1, 0)
  scene.add(valveGroup)

  tractorGroup = buildTractor(matsTractor)
  tractorGroup.position.set(1.55, -0.1, 0)
  scene.add(tractorGroup)

  // invisible, larger pick targets so clicking near the wireframe still registers
  valvePick = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 1.6, 1.2),
    new THREE.MeshBasicMaterial({ visible: false })
  )
  valvePick.position.copy(valveGroup.position)
  valvePick.userData.key = 'valve'
  scene.add(valvePick)

  tractorPick = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 1.8, 1.2),
    new THREE.MeshBasicMaterial({ visible: false })
  )
  tractorPick.position.copy(tractorGroup.position)
  tractorPick.userData.key = 'tractor'
  scene.add(tractorPick)

  applyActiveState()
}

function applyActiveState() {
  if (!matsValve || !matsTractor) return
  const valveActive = props.active === 'valve'
  matsValve.cyanLine.opacity = valveActive ? 0.95 : 0.25
  matsValve.orangeLine.opacity = valveActive ? 0.8 : 0.18
  matsTractor.cyanLine.opacity = valveActive ? 0.25 : 0.95
  matsTractor.orangeLine.opacity = valveActive ? 0.18 : 0.8
}

watch(() => props.active, applyActiveState)

function onClick(e) {
  const rect = renderer.domElement.getBoundingClientRect()
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects([valvePick, tractorPick])
  if (hits.length) {
    emit('select', hits[0].object.userData.key)
  }
}

function onResize() {
  if (!container.value || !renderer || !camera) return
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  t += 0.005
  valveGroup.rotation.y = Math.sin(t * 0.6) * 0.35 + (props.active === 'valve' ? 0.15 : 0)
  tractorGroup.rotation.y = Math.sin(t * 0.6 + 1.5) * 0.3 + (props.active === 'tractor' ? -0.15 : 0)
  renderer.render(scene, camera)
}

onMounted(() => {
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  buildScene(width, height)

  renderer.domElement.addEventListener('click', onClick)
  window.addEventListener('resize', onResize)
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  renderer?.domElement.removeEventListener('click', onClick)
  renderer?.dispose()
  if (renderer?.domElement && container.value?.contains(renderer.domElement)) {
    container.value.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="w-full h-full"></div>
</template>
