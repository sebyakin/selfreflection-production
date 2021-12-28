import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export const Head = (props) => {
  const group = useRef();
  // const [hovered, set] = useState(null)
  const { nodes, materials } = useGLTF('/mesh2.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Polygon_23_1.geometry}
          material={materials.Polygon_2}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Polygon_23_2.geometry}
          material={materials['Material.018']}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Polygon_23_3.geometry}
          material={materials['Material.020']}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Polygon_23_4.geometry}
          material={materials['Material.014']}
          
        />
      </group>
    </group>
  )
}

