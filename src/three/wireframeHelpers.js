import * as THREE from 'three'

// Reusable materials — a fresh set per model so different objects can be
// dimmed/highlighted independently without affecting each other.
export function createMaterials() {
  return {
    cyanLine: new THREE.LineBasicMaterial({ color: 0x5fb3ab, transparent: true, opacity: 0.9 }),
    orangeLine: new THREE.LineBasicMaterial({ color: 0xe8823c, transparent: true, opacity: 0.7 }),
    panelFill: new THREE.MeshBasicMaterial({ color: 0x1a1620, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
  }
}

export function wireBox(w, h, d, mat, fillMat) {
  const group = new THREE.Group()
  const geo = new THREE.BoxGeometry(w, h, d)
  group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat))
  if (fillMat) group.add(new THREE.Mesh(geo, fillMat))
  return group
}

export function wireCylinder(radiusTop, radiusBottom, height, radialSegments, mat, fillMat) {
  const group = new THREE.Group()
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
  group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat))
  if (fillMat) group.add(new THREE.Mesh(geo, fillMat))
  return group
}

export function wireTorus(radius, tube, radialSegments, tubularSegments, mat) {
  const geo = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments)
  return new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat)
}

export function wireSphere(radius, widthSegments, heightSegments, mat, fillMat) {
  const group = new THREE.Group()
  const geo = new THREE.SphereGeometry(radius, widthSegments, heightSegments)
  group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), mat))
  if (fillMat) group.add(new THREE.Mesh(geo, fillMat))
  return group
}
