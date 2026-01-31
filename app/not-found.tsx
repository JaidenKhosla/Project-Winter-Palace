"use client"

import ShadeButton from "@/app/util/ShadeButton";
import { redirect } from "next/navigation";

export default function notFound()
{
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-7xl">404 Not Found</h1>
            <ShadeButton changeShadeOnHover onClick={()=> redirect("/")}>Home</ShadeButton>
        </div>
    )

}