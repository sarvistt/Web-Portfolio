import * as THREE from 'three'
import { wireBox, wireCylinder, wireTorus, wireSphere } from './wireframeHelpers'

// layered plates — TypeScript
function buildLayers(mats) {
  const root = new THREE.Group()
  const sizes = [0.62, 0.5, 0.38]
  sizes.forEach((s, i) => {
    const plate = wireBox(s, 0.05, s, i === 1 ? mats.orangeLine : mats.cyanLine, mats.panelFill)
    plate.position.y = -0.24 + i * 0.24
    plate.rotation.y = i * 0.25
    root.add(plate)
  })
  return root
}

// three crossing rings — Vue & React
function buildAtom(mats) {
  const root = new THREE.Group()
  const ring1 = wireTorus(0.36, 0.02, 6, 24, mats.cyanLine)
  root.add(ring1)
  const ring2 = wireTorus(0.36, 0.02, 6, 24, mats.cyanLine)
  ring2.rotation.x = Math.PI / 3
  root.add(ring2)
  const ring3 = wireTorus(0.36, 0.02, 6, 24, mats.orangeLine)
  ring3.rotation.x = -Math.PI / 3
  root.add(ring3)
  const core = wireSphere(0.06, 8, 6, mats.orangeLine, mats.panelFill)
  root.add(core)
  return root
}

// hexagonal prism — Node / Go
function buildHex(mats) {
  const hex = wireCylinder(0.4, 0.4, 0.28, 6, mats.cyanLine, mats.panelFill)
  hex.rotation.x = Math.PI / 2
  return hex
}

// database drum — PostgreSQL
function buildDatabase(mats) {
  const root = new THREE.Group()
  const drum = wireCylinder(0.36, 0.36, 0.5, 20, mats.cyanLine, mats.panelFill)
  root.add(drum)
  const lid = wireTorus(0.36, 0.015, 6, 20, mats.orangeLine)
  lid.rotation.x = Math.PI / 2
  lid.position.y = 0.24
  root.add(lid)
  return root
}

// stacked shipping-container boxes — Docker / K8s
function buildContainers(mats) {
  const root = new THREE.Group()
  const positions = [
    [-0.22, -0.16, 0],
    [0.2, -0.16, 0.05],
    [-0.02, 0.14, -0.05]
  ]
  positions.forEach(([x, y, z], i) => {
    const box = wireBox(0.34, 0.24, 0.34, i === 2 ? mats.orangeLine : mats.cyanLine, mats.panelFill)
    box.position.set(x, y, z)
    root.add(box)
  })
  return root
}

// plain wireframe cube — Three.js
function buildCube(mats) {
  const cube = wireBox(0.56, 0.56, 0.56, mats.cyanLine, mats.panelFill)
  cube.rotation.set(0.4, 0.5, 0)
  return cube
}

// cluster of overlapping spheres — AWS / GCP
function buildCloud(mats) {
  const root = new THREE.Group()
  const puff1 = wireSphere(0.26, 10, 8, mats.cyanLine, mats.panelFill)
  puff1.position.set(-0.16, -0.02, 0)
  root.add(puff1)
  const puff2 = wireSphere(0.32, 10, 8, mats.cyanLine, mats.panelFill)
  puff2.position.set(0.1, 0.04, 0)
  root.add(puff2)
  const puff3 = wireSphere(0.2, 10, 8, mats.orangeLine, mats.panelFill)
  puff3.position.set(0.28, -0.06, 0.05)
  root.add(puff3)
  return root
}

// pipeline loop — CI / CD
function buildLoop(mats) {
  const root = new THREE.Group()
  const ring = wireTorus(0.34, 0.045, 8, 24, mats.cyanLine)
  root.add(ring)
  const marker = wireBox(0.09, 0.09, 0.09, mats.orangeLine, mats.panelFill)
  marker.position.set(0.34, 0, 0)
  root.add(marker)
  return root
}

const builders = {
  layers: buildLayers,
  atom: buildAtom,
  hex: buildHex,
  database: buildDatabase,
  containers: buildContainers,
  cube: buildCube,
  cloud: buildCloud,
  loop: buildLoop
}

export function buildStackIcon(shape, mats) {
  const build = builders[shape] || buildCube
  return build(mats)
}
