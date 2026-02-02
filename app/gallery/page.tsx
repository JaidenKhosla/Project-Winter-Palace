"use client"

import getChildren from "@/util/Gallery/List";
import { useState } from "react";

import Image from "next/image";

export default function Gallery()
{

    const files = ["test1", "test2"];

    const [ useFiles, setFiles ] = useState<string[]>([]);

    return (
        <div className="flex">
            <div className="border border-white w-[30%] min-h-100 h-full">
                <div className="border-b p-3"/>
                {
                    files.map((file, idx) => {
                        return (
                            <div key={idx} className="transition-all hover:pl-3 hover:bg-hover active:brightness-150" onClick={
                                ()=>{
                                    getChildren("assets").then(arr=>{
                                        setFiles(arr);
                                    })
                                }
                            }>
                                {file}
                            </div>
                        )
                    })
                }

                {
                }
            </div>
                <div className="flex flex-col gap-5 h-full">
                    {useFiles.map((val, idx)=> <Image src={val} alt={`Picture from ${val}`} key={`Image-${idx}`} width={300} height={400} />)}
                </div>
        </div>
    )
}