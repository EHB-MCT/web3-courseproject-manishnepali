import React, { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import "./App.css";
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';



const CameraController = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3()
  return useFrame( () => camera.position.lerp(vec.set(mouse.x * 1.2, mouse.y * 1.2 , 5), 0.04))
};


function App() {
  return (
    <Canvas>
         <CameraController />
         <ambientLight />
         <spotLight intensity={0.3} position={[3, 13, 50]} />
        
         <Suspense fallback={null}>
        <Model />
        <Model position={[0, 0, 0]} />
        <Model position={[10, 0, -10]} />
      </Suspense>
        
      </Canvas>
  );
}


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Predator_s.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.22, 0.22, 0.22]}>
        <mesh geometry={nodes.mesh0.geometry} material={materials.cabeza} />
        <mesh geometry={nodes.mesh0_dat_polySurface13_1.geometry} material={materials.cuerpo} />
        <mesh geometry={nodes.mesh0_1.geometry} material={materials.casco} />
      </group>
    </group>
  )
}

useGLTF.preload('/Predator_s.glb')

export default App;
