import React, { useEffect, useRef, useSpring } from "react";
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
         <spotLight intensity={0.2} position={[9, 20, 80]} />
        
         <Suspense fallback={null}>
        <Model2 camera={{ fov: 75, position: [5, 0, 7] }} />
        
      </Suspense>
        
      </Canvas>
  );
}


function Model({ ...props }) {


  const group = useRef()
  const { nodes, materials } = useGLTF('/Predator_s.glb')
  useFrame(() => {
 
      group.current.rotation.y += 0.025;
    
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.22, 0.22, 0.22]}>
        
        <mesh geometry={nodes.mesh0.geometry} material={materials.cabeza}  />
        <mesh geometry={nodes.mesh0_dat_polySurface13_1.geometry} material={materials.cuerpo} />
        <mesh geometry={nodes.mesh0_1.geometry} material={materials.casco} />
      </group>
    </group>
  )
}

useGLTF.preload('/Predator_s.glb')

function Model2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  useFrame(() => {
 
    group.current.rotation.z += -0.0025;
  
});
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.65, 0.32, -18.9]} rotation={[-Math.PI / 3.9, 0, 0]} scale={0.08}>
            <mesh geometry={nodes['Dragon_Balls_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_08_-_Default_0'].geometry} material={materials['08_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_13_-_Default_0'].geometry} material={materials['13_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_02_-_Default_0'].geometry} material={materials['02_-_Default']} />
            <mesh geometry={nodes['Dragon_Balls_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

export default App;
