import React, {useState} from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import {ImMap2} from 'react-icons/im'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {IoCloseCircleOutline} from 'react-icons/io5'

import { Model } from './Model'

const ModelContainer = () => {
  const [showMenu, setShowmenu] = useState(true);
  return (
    <div className=''>
      <Canvas 
        camera={{ position: [0, 100, 300], fov: 30 }}
        style={{ height: '100vh', width: '100%' }}
      >
      {/* <perspectiveCamera position={[0, 5, 10]} fov={50} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <OrbitControls autoRotate={true}/>
        <Suspense fallback={null}>
          <mesh position={[-700, 0, 500]}>
          <Model />
          </mesh>
        </Suspense>
        {/* <gridHelper args={[20, 20]} /> */}
      </Canvas>
      <div className="fixed z-50 top-0 left-0 w-full h-screen">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between w-full px-12 py-5">
            <div>Makerere SmartCampus</div>
            <div className="flex flex-row items-center gap-12">
              <div className='cursor-pointer'><ImMap2 size={'2rem'}/></div>
              <div className='cursor-pointer' onClick={() => setShowmenu(!showMenu)}>
                {showMenu ? <HiOutlineMenuAlt3 size={'2rem'}/> : <IoCloseCircleOutline size={'2rem'}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelContainer