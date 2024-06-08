// Canvas setup
const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

//scene and camera setup
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(90
    , width / height, 1, 1000)
camera.position.set(16, 10, 10)
camera.lookAt(0, 0, 0)

//renderer setup
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
})
renderer.setSize(width, height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
threejsCanvas.appendChild(renderer.domElement)

//let's add a 3D box
const geometry = new THREE.BoxGeometry(10,10,10)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const box = new THREE.Mesh(geometry, material)
scene.add(box)

//update
update()


//resize check
window.addEventListener('resize', onResize)

function update() {
    box.rotation.x += 0.005
    box.rotation.y += 0.001
    renderer.render(scene, camera)
    window.requestAnimationFrame(update)
}


function onResize() {
    width = threejsCanvas.offsetWidth
    height = threejsCanvas.offsetHeight

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera.aspect = width / height
    camera.updateProjectionMatrix()
}