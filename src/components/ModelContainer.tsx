import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import { ImMap2 } from 'react-icons/im'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseCircleOutline } from 'react-icons/io5'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faBars, faCircleXmark, faMap } from '@fortawesome/free-solid-svg-icons'

import { Model } from './Model'
import PlacesMenu from './PlacesMenu';
// import ReactMap from './ReactMap';

const ModelContainer = () => {
  const [showMenu, setShowmenu] = useState(true);
  const [threeD, setThreeD] = useState(true);
  return (
    <div className=''>
      <Canvas
        camera={{ position: [0, 100, 300], fov: 30 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <mesh position={[-700, 0, 500]}>
            <Model />
          </mesh>
        </Suspense>
      </Canvas>
      {/* <ReactMap /> */}

      <div className="fixed top-0 left-0 w-full">
        <div className="flex flex-row justify-between w-full px-12 py-5">
          <div className='font-bold lg:text-lg'>Makerere Smart Campus</div>
          <div className="flex flex-row items-center gap-12">
            <div className='cursor-pointer' onClick={() => setThreeD(!threeD)}>
              {threeD ? <FontAwesomeIcon icon={faCube} size='xl'/> : <FontAwesomeIcon icon={faMap} size="xl" />}
            </div>
            <div className='cursor-pointer' onClick={() => setShowmenu(!showMenu)}>
              {showMenu ? <FontAwesomeIcon icon={faBars} size="xl" /> : <FontAwesomeIcon icon={faCircleXmark} size="xl" />}
            </div>
          </div>
        </div>
        <div style={{display: showMenu ? 'none' : 'block'}} className=""><PlacesMenu /></div>
      </div>
    </div>
  )
}

export default ModelContainer