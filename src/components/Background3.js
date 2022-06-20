import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from "styled-components";
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: overlaps (https://sketchfab.com/overlaps)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/91964c1ce1a34c3985b6257441efa500
title: Space exploration [WLP series #8]
*/
function Model({ url }) {
  const { nodes } = useGLTF(url)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
        <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
      </group>
    </group>
  )
}

export default function App() {
  return (
    <Wrapper>
      <h1>
       DiHives <span style={{ fontSize: '0.4em' }}>&</span>
        <br />
        <span>Co.</span>
      </h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model url="/scene.glb" />
        </Suspense>
        <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars/>
      </Canvas>
      <div className="layer" />
      <Loader />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #1f1144;
 height:100vh;

 
  @import url('https://rsms.me/inter/inter.css');

html,
body,
#root,
.bg,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background: #171717;
  font-family: 'Inter var', sans-serif;
}

.bg {
  position: absolute;
  background: radial-gradient(at 50% 100%, #873740 0%, #272730 40%, #171720 80%, #070710 100%);
}

h1 {
  position: absolute;
  top: 1900px;
  left: 60px;
  font-weight: 900;
  font-size: 5em;
  margin: 0;
  z-index:10;
  color: peru;
  line-height: 0.6em;
  letter-spacing: -2px;
  text-align: left;
}

h1 > span {
  white-space: pre;
}

.layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(63, 12, 88, 0.25) 0%, transparent 100%);
  pointer-events: none;
}

span.header {
  font-weight: 700;
  position: absolute;
  display: inline-block;
  width: 500px;
  transform: translate3d(0, -50%, 0);
  font-size: 9em;
  line-height: 0.9em;
  pointer-events: none;
  top: 100%;
  left: 50%;
}

span.header-left {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  position: absolute;
  display: inline-block;
  transform: translate3d(0, -50%, 0);
  line-height: 1em;
  top: 2000px;
  left: 60px;
  font-size: 4em;
  width: 200px;
}

a {
  font-weight: 400;
  font-size: 14px;
  color: inherit;
  position: absolute;
  display: inline;
  text-decoration: none;
  z-index: 1;
  color: white;
}

a.top-left {
  top: 60px;
  left: 60px;
}

a.top-right {
  top: 60px;
  right: 60px;
}

a.bottom-left {
  bottom: 60px;
  left: 60px;
}

a.bottom-right {
  bottom: 60px;
  right: 60px;
}
`;