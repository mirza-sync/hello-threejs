import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.z = 100
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.IcosahedronGeometry(2, 2)
const material = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true })
const cube = new THREE.Mesh(geometry, material)
cube.position.set(0, 3, 0)
scene.add(cube)

const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
})
const wireMesh = new THREE.Mesh(geometry, wireMat)
cube.add(wireMesh)

const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)
const ambientLight = new THREE.AmbientLight(0xffffff)
// const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
// hemiLight.position.set(0, 3, 0)
scene.add(
  pointLight,
  ambientLight,
  // hemiLight
)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(gridHelper, lightHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function generateStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(() => generateStar())

function animate() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
  controls.update()
}
renderer.setAnimationLoop(animate)