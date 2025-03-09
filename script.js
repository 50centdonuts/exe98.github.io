alert("1")
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.129.0/build/three.module.js"

const width = screen.width
const height = screen.height
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(width,height)
document.body.appendChild(renderer.domElement)

const fov = 90
const aspect = width/height
const near = 0.1
const far = 10
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far)
camera.position.z = 2

const scene = new THREE.Scene()

renderer.render(scene,camera)