import React, { useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import { Model } from './Model'
import TopBar from './TopBar';

const ModelContainer = () => {
  return (
    <div className=''>
      <Canvas
        camera={{ position: [0, 50, 275], fov: 30 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <PerspectiveCamera fov={50} near={0.1} far={100000} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <OrbitControls autoRotate={true} autoRotateSpeed={0.2}/>
        <Suspense fallback={null}>
          <mesh position={[-400, 0, 400]} rotation={[0, 0, 0]}>
            <Model />
          </mesh>
        </Suspense>
        <gridHelper args={[20, 20, 0xff0000, 'teal']} />
      </Canvas>
      <TopBar />
    </div>
  )
}

export default ModelContainer