import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import "./App.css";
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
         <spotLight intensity={0.3} position={[3, 13, 50]} />
         <mesh position={[3, 0, 3]}>
            <boxGeometry attach="geometry" args={[9, 2, 1]} />
            <meshPhongMaterial attach="material" color="hotpink" />
         </mesh>
         
         <mesh position={[3, 5, 3]}>
            <cylinderGeometry attach="geometry" args={[4, 3, 4]} />
            <meshPhongMaterial attach="material" color="darkred" />
         </mesh>
      </Canvas>
  );
}

export default App;
