import React, { useEffect, useRef, useSpring } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import "./App.css";
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';



const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
         () => {
            const controls = new OrbitControls(camera, gl.domElement);
            controls.minDistance = 3;
            controls.maxDistance = 20;
            return () => {
              controls.dispose();
            };
         },
         [camera, gl]
      );
      return null;
    
};


function App() {
  
  return (
    <Canvas>
         <CameraController />
         <ambientLight />
         <spotLight intensity={0.2} position={[9, 20, 80]} />
        
         <Suspense fallback={null}>
           <Model position={0, 0, 0} /> 
        <Model2  position={0, -3, 0}/>
        
      </Suspense>
      <div>
        <p>man</p>
        </div>
      </Canvas>
      
  );
}

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/vierge.glb')
  useFrame(() => {
 
    group.current.rotation.y += 0.025;
  
});
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['default'].geometry}
        material={materials.SAVE_REALITY_VIERGE_Mod_le_1_u1_v1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Object001.geometry}
        material={materials['Material #25']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/vierge.glb')

function Model2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
 

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.3,-0.3,0]} rotation={[-Math.PI / 1.99, 0, 3]} scale={0.01}>
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
