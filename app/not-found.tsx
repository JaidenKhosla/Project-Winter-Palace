"use client"

import ShadeButton from "@/util/ShadeButton";
import { redirect } from "next/navigation";

export default function notFound()
{
    return (
        <div className="flex flex-col items-center gap-4">
            
            <h1 className="text-7xl">404 Not Found</h1>
            <ShadeButton changeShadeOnHover onClick={()=> redirect("/")}>Home</ShadeButton>
        </div>
    )

}