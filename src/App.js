import "./styles.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Html, useProgress, Stats } from '@react-three/drei'
import React, { useRef } from 'react'
import {Head} from './Components/Head'  
import Title from "./Components/Title";
import Text from "./Components/Text";
import Controls from "./Components/Controls";
import Predictions from "./Components/Predictions";
import Credits from "./Components/Credits";

function Loader({setLoader}) {
  const { progress } = useProgress()
  
  if (Math.floor(progress) == 83) {
    setLoader(true)
  }

  return <Html className="preloader">Loading is happening just right now... {Math.floor(progress)} %</Html>
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

  const [isFooter, setFooter] = useState(false)
  const [isLoader, setLoader] = useState(false)

  return (  
    <>


      <div className={isLoader ? 'top' : 'hidden'}> 
        <Title />
        { isFooter ?  
          '' : 
          <Text />
        }
      </div>
      
      { isFooter ?  
          <div className="predictions">
            <Predictions />
          </div> : 
          ''
      }
      
      <div className={isLoader ? 'bottom' : 'hidden'}>
      { isFooter ? <Credits /> : <>
          <Controls setFooter={setFooter} /> 
      </>
      }
      </div>
    


    <Canvas className="canvas" camera={{ position: [0, 20, 5], rotation: [-90, 0, 0], fov: 35 }}>
      <Suspense fallback={<Loader setLoader={setLoader} />}>
        <Rig>
          <Head position={[0, -2.25, 0]} scale={[0.0125, 0.0125, 0.0125]} />
        </Rig>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Environment files="/sky.hdr" background />
      </Suspense>
    </Canvas>
    </>
  );
}

