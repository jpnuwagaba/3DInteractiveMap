/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 college-labels.gltf
*/

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, Text } from '@react-three/drei'

export function CollegeLabels(props) {
  const { nodes, materials } = useGLTF('/college-labels.gltf');
  const labelsRef = useRef([]);

  useLayoutEffect(() => {
    labelsRef.current.forEach((label) => {
      label.lookAt(0, 0, 275)
    })
  })
  return (
    <group {...props} dispose={null} scale={0.2}>
      <mesh scale={0.4} geometry={nodes['G-__555672'].geometry} material={materials.Heather_Stripe2} position={[1705.17, 27.48, -2055.98]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>Department of Chemistry I</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555681'].geometry} material={materials.Heather_Stripe2} position={[1561.72, 49.52, -2309.53]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>School of Food Science, Nutrition and Bio-engineering</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555690'].geometry} material={materials.Heather_Stripe2} position={[1805.85, 25.15, -1907.27]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>College Of Agriculture</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555699'].geometry} material={materials.Heather_Stripe2} position={[1878.23, 45.27, -1980.37]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>East African School of Library and Information Science</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555708'].geometry} material={materials.Heather_Stripe2} position={[1714.3, 24.54, -2024.73]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>Department of Chemistry II</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555717'].geometry} material={materials.Heather_Stripe2} position={[2203.22, 22.14, -1718.44]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>COCIS B</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555726'].geometry} material={materials.Heather_Stripe2} position={[2243.61, 33.75, -1624.13]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>COCIS A</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555735'].geometry} material={materials.Heather_Stripe2} position={[1763.37, 33.06, -2106.96]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>Department Of Plant Science, Microbiology & Biotechnology</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555744'].geometry} material={materials.Heather_Stripe2} position={[1760.24, 37.19, -1970.2]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>JICA</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555753'].geometry} material={materials.Heather_Stripe2} position={[1560.44, 54.94, -2173.11]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>College of Engineering Design Art and Technology</Text></mesh>
      <mesh scale={0.4} geometry={nodes['G-__555762'].geometry} material={materials.Heather_Stripe2} position={[1701.69, 21.06, -2217.4]}><Text fontSize={7} maxWidth={100} textAlign='center' color={'black'} position={[10, 30, -9]} ref={(ref) => labelsRef.current[0] = ref}>Department of Physics</Text></mesh>

      {/* <mesh geometry={nodes['G-__555672'].geometry} material={materials.Heather_Stripe2} position={[1705.17, 27.48, -2055.98]}></mesh>
      <mesh geometry={nodes['G-__555681'].geometry} material={materials.Heather_Stripe2} position={[1561.72, 49.52, -2309.53]}></mesh>
      <mesh geometry={nodes['G-__555690'].geometry} material={materials.Heather_Stripe2} position={[1805.85, 25.15, -1907.27]}></mesh>
      <mesh geometry={nodes['G-__555699'].geometry} material={materials.Heather_Stripe2} position={[1878.23, 45.27, -1980.37]}></mesh>
      <mesh geometry={nodes['G-__555708'].geometry} material={materials.Heather_Stripe2} position={[1714.3, 24.54, -2024.73]}></mesh>
      <mesh geometry={nodes['G-__555717'].geometry} material={materials.Heather_Stripe2} position={[2203.22, 22.14, -1718.44]}></mesh>
      <mesh geometry={nodes['G-__555726'].geometry} material={materials.Heather_Stripe2} position={[2243.61, 33.75, -1624.13]}></mesh>
      <mesh geometry={nodes['G-__555735'].geometry} material={materials.Heather_Stripe2} position={[1763.37, 33.06, -2106.96]}></mesh>
      <mesh geometry={nodes['G-__555744'].geometry} material={materials.Heather_Stripe2} position={[1760.24, 37.19, -1970.2]}></mesh>
      <mesh geometry={nodes['G-__555753'].geometry} material={materials.Heather_Stripe2} position={[1560.44, 54.94, -2173.11]}></mesh>
      <mesh geometry={nodes['G-__555762'].geometry} material={materials.Heather_Stripe2} position={[1701.69, 21.06, -2217.4]}></mesh> */}
    </group>
  )
}

useGLTF.preload('/college-labels.gltf')
