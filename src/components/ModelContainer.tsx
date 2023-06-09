import React, { useState } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, Stars, MapControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import { Model } from './Model'
import { CollegeLabels } from './College-labels'
import { HallsLabels } from './Halls-labels'
import { OpenSpacesLabels } from './Openspaces-labels'
import {RoadsLabels} from './Roads-labels'
import {Trees} from './Trees'
import TopBar from './TopBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const MAX_POLAR_ANGLE = 20;
const MIN_POLAR_ANGLE = 80;

const ModelContainer = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleCollegesLayer, setToggleCollegesLayer] = useState(false);
  const [toggleHallsLayer, setToggleHallsLayer] = useState(false);
  const [toggleOpenSpacesLayer, settoggleOpenSpacesLayer] = useState(false);
  const [toggleHangoutSpotsLayer, setToggleHangoutSpotsLayer] = useState(false);

  const Menu = () => {
    return (
      <div className='fixed right-6 md:right-10 top-12 bg-white/75 p-4 rounded-md'>
        <div>
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg">Places</div>
          </div>
          <div className=" mt-5 flex flex-col gap-3">
            <div className="rounded border border-cyan-500 md p-3 w-[200px] cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between">
              <div>Colleges</div>
              <div onClick={() => setToggleCollegesLayer(!toggleCollegesLayer)}><Switch checked={toggleCollegesLayer} {...label} /></div>
            </div>
            <div className="rounded border border-cyan-500 md p-3 w-[200px] cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between">
              <div>Halls</div>
              <div onClick={() => setToggleHallsLayer(!toggleHallsLayer)}><Switch checked={toggleHallsLayer} {...label} /></div>
            </div>
            <div className="rounded border border-cyan-500 md p-3 w-[200px] cursor-pointer hover:bg-gray-100 flex flex-row items-center justify-between">
              <div>Open Spaces</div>
              <div onClick={() => settoggleOpenSpacesLayer(!toggleOpenSpacesLayer)}><Switch checked={toggleOpenSpacesLayer} {...label} /></div>
            </div>
            <div className="rounded border border-cyan-500 md p-3 w-[200px] cursor-pointer hover:bg-gray-100">
              <div className="flex flex-row items-center justify-between">
              <div>Hangout Spots</div>
              <div onClick={() => setToggleHangoutSpotsLayer(!toggleHangoutSpotsLayer)}><Switch checked={toggleHangoutSpotsLayer} {...label} /></div>
              </div>
              <div className="tet-sm font-bold text-gray-700 italic">Not Available</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-screen'>
      <Canvas
        camera={{ position: [0, 50, 275], fov: 30 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <PerspectiveCamera fov={50} near={0.1} far={100000} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <MapControls
          enableZoom={true}
          zoomSpeed={1.4}
          enablePan={true}
          panSpeed={1.4}
          enableRotate={true}
          rotateSpeed={1.4}
          minZoom={50}
          maxZoom={230}
          minDistance={50}
          maxDistance={230}
          minPolarAngle={Math.PI / 9}
          maxPolarAngle={Math.PI / 2.4}
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
        />
        {/* <OrbitControls 
          enableZoom={true}
          zoomSpeed={0.5}
          enablePan={true}
          panSpeed={0.8}
          enableRotate={true}
          rotateSpeed={0.6}
          minDistance={50}
          maxDistance={270}
          minPolarAngle={Math.PI / 9}
          maxPolarAngle={Math.PI / 2.4}
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
        /> */}
        <Suspense fallback={null}>
          <mesh position={[-400, 0, 400]} rotation={[0, 0, 0]}>
            <Model />
            <mesh><RoadsLabels /></mesh>
            <mesh><Trees /></mesh>
            <mesh position={toggleCollegesLayer ? [0, 0, 0] : [0, 300, 0]}><CollegeLabels /></mesh>
            <mesh position={toggleHallsLayer ? [0, 0, 0] : [0, 300, 0]}><HallsLabels /></mesh>
            <mesh position={toggleOpenSpacesLayer ? [0, 0, 0] : [0, 300, 0]}><OpenSpacesLabels /></mesh>
          </mesh>
        </Suspense>
        {/* <gridHelper args={[20, 20, 0xff0000, 'teal']} /> */}
      </Canvas>

      <TopBar />
      <div onClick={() => setToggleMenu(!toggleMenu)} className='fixed right-6 md:right-10 top-5 cursor-pointer'>
        {toggleMenu ? <FontAwesomeIcon icon={faLayerGroup} size="xl" /> : <FontAwesomeIcon icon={faLayerGroup} size="xl" />}
      </div>
      <div style={{ display: toggleMenu ? 'none' : 'block' }}><Menu /></div>
    </div>
  )
}

export default ModelContainer