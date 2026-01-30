"use client"

import Image from "next/image";
import Command from "@/app/util/Command";
import Scroll from "@/app/util/Scroll";

import { useState } from "react";
import ShadeButton from "@/app/util/ShadeButton";

export default function Home() {

  const [ commandFinished, setCommandFinished ] = useState<{ [key: string]: boolean}>({});
  const [ useShade, setShade ] = useState<boolean>(false);

  return (
    <div className="ml-5 mt-5">
      <div className="text-2xl">
        <p>THS CMD</p>
        <p>Copyright THS Corp. All rights reserved</p>
      </div>
      <br/>
      <Command text="cat home.txt" callback={()=>{ 
        setCommandFinished({
          ...commandFinished,
          "start": true
        })
      }}/>

     {commandFinished["start"] && 
     <Scroll className="w-[50%]">
        <h1 className="mt-15 text-6xl [text-shadow:4px_2px_0_var(--color-shdn)]">Creating the next generations of coders!</h1> 
        <p className="ml-3 text-2xl mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor</p>
        <div className="flex gap-3 mt-10">
          <ShadeButton shade={!useShade} onMouseEnter={()=>setShade(true)} onMouseLeave={()=>setShade(false)}>CSHS</ShadeButton>
          <ShadeButton shade={useShade} onMouseEnter={()=>setShade(false)} onMouseLeave={()=>setShade(true)}>Gallery</ShadeButton>
        </div>
      </Scroll>}
    </div>
  )
}
