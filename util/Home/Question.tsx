"use client"

import { CaretDown } from "@boxicons/react";
import { useState } from "react";

import clsx from "clsx";
interface QuestionProps {
    question: string;
    answer: string;
}

export default function Question({ question, answer }: QuestionProps)
{
    const [ useToggle, setToggle ] = useState<boolean>(false);

    return (
        <div className="w-150">
            <div onClick={()=>setToggle(toggle=>!toggle)} className={clsx("group p-3 border border-white w-full transition-all hover:bg-white hover:text-background justify-between flex cursor-pointer", useToggle && "bg-white text-background")}>
                <h4 className="text-2xl select-none">{question}</h4>
                <CaretDown className={clsx("transition-transform", useToggle && "rotate-180")}/>
            </div>
            <div className={clsx("border border-t-0 border-white transition-[height] overflow-hidden h-0 opacity-0 w-full", useToggle && "h-50 p-3 opacity-100")}>
                {answer}
            </div>
        </div>
    )
}