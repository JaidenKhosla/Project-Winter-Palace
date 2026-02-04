import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Megaphone, BoxIconProps, DiscordAlt, Instagram } from "@boxicons/react";
import Link from "next/link";

type IconType = ForwardRefExoticComponent<BoxIconProps & RefAttributes<SVGSVGElement>>;

export default function Footer()
{
    return (
        <div className="w-full bg-header h-120 p-5 mt-5 max-md:flex max-md:flex-col max-md:text-center max-md:items-center">
            <h1 className="underline text-4xl">James E. Taylor Computer Science Club</h1>
            <div className="flex">
                <div>
                    <section className="mt-3 flex gap-3 flex-col">
                        <Social title="@jetcompsci" link="https://www.instagram.com/jetcompsci/" icon={Instagram}/>
                        <Social title="Discord Server" link="https://discord.com/invite/GMQvwGryHg/" icon={DiscordAlt}/>
                        <Social title="@jetcompsci" link="https://www.remind.com/join/jetcompsci" icon={Megaphone}/>
                    </section>
                </div>
            </div>
        </div>
    )
}

function Social({ title, link, icon: Icon }: { title: string, link: string, icon: IconType})
{
    return (
        <div className="group flex items-center gap-x-2 cursor-pointer max-md:flex-col">
            <Link href={link} target="_blank" className="flex items-center justify-center border rounded-full p-2 max-md:p-5 transition-all group-hover:scale-90 group-hover:bg-white">
                <Icon size="md" className="group-hover:text-header transition-all"/>
            </Link>
            <h3 className="text-2xl group-hover:underline">{title}</h3>
        </div>
    )
}