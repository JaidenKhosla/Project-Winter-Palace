"use client"

import Image from "next/image";
import * as THREE from "three";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import Box from "@/app/model";
import Model from "@/app/model";

export default function Home() {
  return (
    <div>
      <Model/>
    </div>
  )
}
