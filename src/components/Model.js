/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('computer.gltf')
  return (
    <group scale={8} ref={group} {...props} dispose={null} position={[0, -0.5, 0]}>
      <mesh geometry={nodes.Base.geometry} material={materials.New}>
        <mesh geometry={nodes.Screen.geometry} material={materials.New} position={[0, 0, -0.03]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('computer.gltf')