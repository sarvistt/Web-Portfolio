<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, scene, camera, animationId
let laptop, display
let targetRotX = 0.32
let targetRotY = -0.5
let isDragging = false
let autoRotate = true
let prevX = 0
let prevY = 0
let t = 0

function wireBox(w, h, d, mat, fillMat) {
  const box = new THREE.Group()
  const geo = new THREE.BoxGeometry(w, h, d)
  const edges = new THREE.EdgesGeometry(geo)
  box.add(new THREE.LineSegments(edges, mat))
  if (fillMat) box.add(new THREE.Mesh(geo, fillMat))
  return box
}

function buildScene(width, height) {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(0, 0, 5.2)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.cursor = 'grab'
  container.value.appendChild(renderer.domElement)

  const group = new THREE.Group()
  scene.add(group)

  const cyanLine = new THREE.LineBasicMaterial({ color: 0x5fb3ab, transparent: true, opacity: 0.9 })
  const orangeLine = new THREE.LineBasicMaterial({ color: 0xe8823c, transparent: true, opacity: 0.55 })
  const cyanFill = new THREE.MeshBasicMaterial({ color: 0x5fb3ab, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
  const panelFill = new THREE.MeshBasicMaterial({ color: 0x1a1620, transparent: true, opacity: 0.35, side: THREE.DoubleSide })

  laptop = new THREE.Group()
  group.add(laptop)

  // base (keyboard deck)
  const baseW = 2.6, baseD = 1.75, baseH = 0.12
  const base = wireBox(baseW, baseH, baseD, cyanLine, panelFill)
  laptop.add(base)

  // trackpad
  const trackpad = wireBox(0.9, 0.02, 0.55, orangeLine, null)
  trackpad.position.set(0, baseH / 2 + 0.01, 0.45)
  laptop.add(trackpad)

  // keyboard grid — small key wireframes
  const keyGroup = new THREE.Group()
  const cols = 10, rows = 4
  const keySize = 0.16, gap = 0.045
  const gridW = cols * (keySize + gap) - gap
  const keyGeo = new THREE.BoxGeometry(keySize, 0.02, keySize)
  const keyEdges = new THREE.EdgesGeometry(keyGeo)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = new THREE.LineSegments(keyEdges, cyanLine)
      key.position.set(
        -gridW / 2 + c * (keySize + gap) + keySize / 2,
        baseH / 2 + 0.011,
        -0.62 + r * (keySize + gap)
      )
      keyGroup.add(key)
    }
  }
  laptop.add(keyGroup)

  // hinge + screen
  const hinge = new THREE.Group()
  hinge.position.set(0, baseH / 2, -baseD / 2)
  hinge.rotation.x = -0.16 // slight backward tilt = "open" laptop angle
  laptop.add(hinge)

  const screenW = baseW, screenH = 1.62, screenT = 0.07
  const screen = wireBox(screenW, screenH, screenT, cyanLine, panelFill)
  screen.position.set(0, screenH / 2, 0)
  hinge.add(screen)

  // display glow panel, inset within the screen front face
  const dispW = screenW - 0.22, dispH = screenH - 0.22
  const dispGeo = new THREE.PlaneGeometry(dispW, dispH)
  display = new THREE.Mesh(dispGeo, cyanFill)
  display.position.set(0, screenH / 2, screenT / 2 + 0.002)
  hinge.add(display)
  const dispEdges = new THREE.LineSegments(new THREE.EdgesGeometry(dispGeo), cyanLine)
  dispEdges.position.copy(display.position)
  hinge.add(dispEdges)

  // suggested "code lines" on screen
  const codeLines = new THREE.Group()
  const lineWidths = [0.55, 0.72, 0.4, 0.65, 0.3, 0.6]
  lineWidths.forEach((w, i) => {
    const geo = new THREE.PlaneGeometry(w * dispW * 0.5, 0.035)
    const mat = i % 3 === 0 ? orangeLine : cyanLine
    const seg = new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat)
    seg.position.set(-dispW / 2 + (w * dispW * 0.25) + 0.18, screenH - 0.55 - i * 0.19, screenT / 2 + 0.004)
    codeLines.add(seg)
  })
  hinge.add(codeLines)

  // center the whole assembly nicely in view
  laptop.position.set(0, -0.15, 0.25)
  laptop.rotation.x = targetRotX
  laptop.rotation.y = targetRotY
}

function onPointerDown(e) {
  isDragging = true
  autoRotate = false
  renderer.domElement.style.cursor = 'grabbing'
  prevX = e.clientX
  prevY = e.clientY
}
function onPointerMove(e) {
  if (!isDragging) return
  const dx = e.clientX - prevX
  const dy = e.clientY - prevY
  targetRotY += dx * 0.005
  targetRotX += dy * 0.005
  prevX = e.clientX
  prevY = e.clientY
}
function onPointerUp() {
  isDragging = false
  if (renderer) renderer.domElement.style.cursor = 'grab'
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
  if (autoRotate) {
    targetRotY += 0.0028
    targetRotX = 0.32 + Math.sin(t * 0.6) * 0.06
  }
  laptop.rotation.y += (targetRotY - laptop.rotation.y) * 0.08
  laptop.rotation.x += (targetRotX - laptop.rotation.x) * 0.08
  display.material.opacity = 0.08 + Math.sin(t * 1.4) * 0.02
  renderer.render(scene, camera)
}

onMounted(() => {
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  buildScene(width, height)

  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onResize)

  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('resize', onResize)
  renderer?.domElement.removeEventListener('pointerdown', onPointerDown)
  renderer?.dispose()
  if (renderer?.domElement && container.value?.contains(renderer.domElement)) {
    container.value.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="w-full h-full"></div>
</template>
