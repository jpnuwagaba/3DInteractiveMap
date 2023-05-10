import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import Model from './Model'


const ThreeDWebMap = () => {
  const gltf = useLoader(GLTFLoader, './model.gltf')
  return <primitive object={gltf}/>
}

export default ThreeDWebMap