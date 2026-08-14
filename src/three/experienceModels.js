import * as THREE from 'three'
import { createMaterials, wireBox, wireCylinder, wireTorus } from './wireframeHelpers'

export { createMaterials }

// A venturi-style airflow valve: wide inlet, converging cone, narrow throat with
// pressure-tap stubs and a damper disc, diverging cone, wide outlet.
export function buildValve(mats) {
  const root = new THREE.Group()
  const tube = new THREE.Group()

  // segment radii/heights, stacked along local Y before the whole tube is laid horizontal
  const rWide = 0.34
  const rThroat = 0.13

  const inlet = wireCylinder(rWide, rWide, 0.32, 20, mats.cyanLine, mats.panelFill)
  const converge = wireCylinder(rThroat, rWide, 0.4, 20, mats.cyanLine, mats.panelFill)
  const throat = wireCylinder(rThroat, rThroat, 0.26, 20, mats.orangeLine, mats.panelFill)
  const diverge = wireCylinder(rWide, rThroat, 0.55, 20, mats.cyanLine, mats.panelFill)
  const outlet = wireCylinder(rWide, rWide, 0.34, 20, mats.cyanLine, mats.panelFill)

  let y = 0
  const place = (seg, h) => {
    seg.position.y = y + h / 2
    y += h
    tube.add(seg)
  }
  place(inlet, 0.32)
  place(converge, 0.4)
  const throatY = y + 0.13
  place(throat, 0.26)
  place(diverge, 0.55)
  place(outlet, 0.34)

  // center the assembly on its own axis
  tube.position.y = -y / 2
  root.add(tube)

  const throatCenterY = throatY - y / 2

  // inlet + outlet flanges
  const flangeIn = wireTorus(0.38, 0.045, 6, 16, mats.cyanLine)
  flangeIn.rotation.x = Math.PI / 2
  flangeIn.position.y = -y / 2 + 0.01
  root.add(flangeIn)

  const flangeOut = wireTorus(0.38, 0.045, 6, 16, mats.cyanLine)
  flangeOut.rotation.x = Math.PI / 2
  flangeOut.position.y = y / 2 - 0.01
  root.add(flangeOut)

  // pressure-tap stubs at the throat, reading the pressure differential
  const tapTop = wireCylinder(0.025, 0.025, 0.22, 8, mats.cyanLine, null)
  tapTop.position.set(0, throatCenterY, rThroat + 0.11)
  tapTop.rotation.x = Math.PI / 2
  root.add(tapTop)

  const tapSide = wireCylinder(0.025, 0.025, 0.18, 8, mats.cyanLine, null)
  tapSide.position.set(rThroat + 0.09, throatCenterY - 0.06, 0)
  tapSide.rotation.z = Math.PI / 2
  root.add(tapSide)

  // damper disc inside the throat, tilted to suggest a partially-open airflow valve
  const damper = wireCylinder(rThroat - 0.01, rThroat - 0.01, 0.015, 16, mats.orangeLine, mats.panelFill)
  damper.position.y = throatCenterY
  damper.rotation.z = 0.55
  root.add(damper)

  // small actuator housing + stem driving the damper, mounted above the throat
  const stem = wireCylinder(0.03, 0.03, 0.22, 8, mats.orangeLine, null)
  stem.position.set(0, throatCenterY + 0.16, 0)
  root.add(stem)

  const actuator = wireBox(0.26, 0.18, 0.22, mats.orangeLine, mats.panelFill)
  actuator.position.set(0, throatCenterY + 0.34, 0)
  root.add(actuator)

  // lay the whole assembly on its side, like the original pipe run
  root.rotation.z = Math.PI / 2
  root.scale.setScalar(1.05)
  return root
}

// A simplified low-poly tractor: chassis, hood, cab, and four wheels.
export function buildTractor(mats) {
  const root = new THREE.Group()

  const chassis = wireBox(1.6, 0.32, 0.55, mats.cyanLine, mats.panelFill)
  chassis.position.set(-0.05, 0.42, 0)
  root.add(chassis)

  const hood = wireBox(0.55, 0.3, 0.42, mats.cyanLine, mats.panelFill)
  hood.position.set(0.85, 0.42, 0)
  root.add(hood)

  const cab = wireBox(0.55, 0.58, 0.5, mats.orangeLine, mats.panelFill)
  cab.position.set(-0.45, 0.72, 0)
  root.add(cab)

  const exhaust = wireCylinder(0.03, 0.03, 0.4, 8, mats.cyanLine, null)
  exhaust.position.set(0.62, 0.75, 0.16)
  root.add(exhaust)

  const rearWheelL = wireTorus(0.34, 0.09, 8, 16, mats.cyanLine)
  rearWheelL.position.set(-0.55, 0.34, 0.32)
  root.add(rearWheelL)
  const rearWheelR = rearWheelL.clone()
  rearWheelR.position.z = -0.32
  root.add(rearWheelR)

  const frontWheelL = wireTorus(0.2, 0.06, 8, 16, mats.cyanLine)
  frontWheelL.position.set(0.78, 0.2, 0.3)
  root.add(frontWheelL)
  const frontWheelR = frontWheelL.clone()
  frontWheelR.position.z = -0.3
  root.add(frontWheelR)

  root.scale.setScalar(0.95)
  root.position.y = -0.15
  return root
}
