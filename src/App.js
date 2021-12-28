import "./style.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Html, useProgress, Stats } from '@react-three/drei'
import {proxy, useProxy} from 'valtio'
import React, { useRef } from 'react'
import {Head} from './Head'  
import { animated, useSpring } from '@react-spring/web'

function Loader() {
  const { progress } = useProgress()
  return <Html center className="preloader">Loading is happening just right now ..{progress} %</Html>
}

function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    // camera.position.lerp(vec.set(mouse.x * 0, 3.5, 3), 0.05)
    camera.position.x += ( mouse.x - camera.position.x ) * .01
		camera.position.y += ( - mouse.y - camera.position.y ) * .015
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
  })
  return <group ref={ref}>{children}</group>
}

export default function App() {
  // document.getElementById('listener').addEventListener( 'mousemove', onDocumentMouseMove, false );
  
  // function onDocumentMouseMove( event ) {

  //   const mouseX = event.clientX
  //   const mouseY = event.clientY
  
  // }


  return (  
      <Canvas style={{ position: "absolute" }} camera={{ position: [0, 20, 5], rotation: [-90, 0, 0], fov: 35 }}>
        <Suspense fallback={<Loader />}>
          <Rig>
            <Head position={ [0, -2.25, 0] } scale={[0.0125, 0.0125, 0.0125]} />
          </Rig>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Stats />
          <Environment files="/sky.hdr" background />
        </Suspense>
      </Canvas>
  );
}

export const Default = () => {
  return (
    <>
      <section className="content">
        <div className="headline">
          <h1>Self-Reflection</h1>
        </div>

        <div className="bits hidden">
          <div className="bit pill">Text goes here</div>
        </div>

        <div className="text">
          <h2>
            A virtual space which narrates the social-psychological influence and
            intimate connections between Digital Interaction (biotechnology) and
            Users (human) in a personal case.
          </h2>
        </div>

        <div className="technical">
          <div className="pill blink" id="analyse">
            We analysing your data and social graph using your browser’s cookies
            to adapt your experience...
          </div>
          <div className="button pill hidden">Continue</div>
        </div>
      </section>

      <div className="credits hidden">
        <div className="qr hidden">
          <div className="circle">
            <div className="qr-code">
              <img src="/assets/qrcode.svg" />
            </div>
          </div>
        </div>

        <a href="https://www.instagram.com/ar/419426756403911/"
          ><div className="button pill ar">Use AR effect on Instagram</div></a
        >

        <a
          href="https://www.instagram.com/olyabazilevich/"
          target="_blank"
          rel="noopener noreferrer"
          >OLYA BAZILEVICH</a
        >

        <a
          className="ar-experience"
          href="https://www.instagram.com/ar/419426756403911/"
          target="_blank"
          rel="noopener noreferrer"
          >USE THIS FOR AR EXPERIENCE</a
        >

        <a
          href="https://www.instagram.com/sebyakin"
          target="_blank"
          rel="noopener noreferrer"
          >LESHA SEBYAKIN</a
        >
      </div>
    </>
  )
}
