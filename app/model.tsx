"use client"

import * as THREE from "three";
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Center, useGLTF } from '@react-three/drei'
import { AsciiEffect } from "three/examples/jsm/Addons.js";
import { Group } from "three/examples/jsm/libs/tween.module.js";


function Box(props: ThreeElements['group']) {
    const THS_LOGO = useGLTF("/assets/logo.glb");

    const model_ref = useRef<THREE.Group>(null);

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false);

    useFrame(()=>model_ref.current?.rotateY(0.009));

    return (
        <Center>
            <group scale={1.5} ref={model_ref} {...props}>
                <primitive object={THS_LOGO.scene}/>
            </group>
        </Center>
    );
}

export default function Model()
{

    return (
        <Canvas className="size-200 bg-black" onCreated={({ gl, scene, camera})=>{
            const asciiEffect = new AsciiEffect(gl);
            gl.render = (_) => asciiEffect.render(scene, camera);
        }}>
          <hemisphereLight intensity={1}/>
          {/* <ambientLight color={[255,0,0]}/> */}
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Box position={[0, 10, -1]} />
        </Canvas>
    )
}