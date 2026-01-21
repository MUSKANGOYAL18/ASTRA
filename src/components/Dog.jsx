import { useGSAP } from '@gsap/react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Dog = () => {
  /* ---------------- REFS ---------------- */
  const modelRef = useRef()
  const scrollYOffset = useRef(-0.5)
  const baseRotation = useRef({ x: 0, y: 0 })

  /* ---------------- MODEL ---------------- */
  const model = useGLTF('/models/girl.glb')

  /* ---------------- CAMERA ---------------- */
  useThree(({ camera }) => {
    camera.position.z = 0.7
  })

  /* ---------------- MATERIAL (ONE TIME ONLY) ---------------- */
  const applyMaterial = (m) => {
    // clean, sharp, slightly blue hero look
    m.color.setRGB(1, 1, 1)

    m.emissive.set('#1e3a5f')      // soft blue tone
    m.emissiveIntensity = 0.22

    m.metalness = 0.55
    m.roughness = 0.22
    m.envMapIntensity = 1.4

    m.needsUpdate = true
  }

  /* ---------------- FLOAT + ROTATION ---------------- */
  useFrame((state) => {
    if (!modelRef.current) return

    const t = state.clock.getElapsedTime() * 0.6

    modelRef.current.position.y =
      scrollYOffset.current + Math.sin(t) * 0.02

    modelRef.current.rotation.x = baseRotation.current.x
    modelRef.current.rotation.y =
      baseRotation.current.y + Math.sin(t * 0.4) * 0.15
  })

  /* ---------------- INITIAL SETUP (ONCE) ---------------- */
  useEffect(() => {
    model.scene.traverse((child) => {
      if (!child.isMesh || !child.material) return
      applyMaterial(child.material)
    })
  }, [model])

  /* ---------------- SCROLL ANIMATION ---------------- */
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '#section-1',
        endTrigger: '#section-3',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
      .to(scrollYOffset, { current: -0.1 })
      .to(model.scene.position, { z: -0.5 }, '<')
      .to(baseRotation.current, { x: Math.PI / 18 })
      .to(baseRotation.current, { y: -Math.PI, x: 0 })
  }, [])

  /* ---------------- RENDER ---------------- */
  return (
    <>
      <primitive
        ref={modelRef}
        object={model.scene}
        position={[0, -0.5, 0]}
      />

      {/* KEY LIGHT */}
      <directionalLight
        position={[1.5, 3, 2]}
        intensity={3.5}
        color="#ffffff"
      />

      {/* FILL LIGHT */}
      <directionalLight
        position={[0, 5, 5]}
        intensity={1.2}
        color="#bfc7ff"
      />

      <OrbitControls enableZoom={false} />
    </>
  )
}

export default Dog
