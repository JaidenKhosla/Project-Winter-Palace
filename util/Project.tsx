import Image from "next/image"
import Link from "next/link"

export interface ProjectProps
{
    Name: string,
    author: string,
    description: string,
    projectLink: string,
    hide?: boolean
    imageLink: string
}

export default function Project({ project } : { project: ProjectProps })
{


    return (
        <Link href={project.projectLink} replace={false} target="_blank" rel="noopener noreferrer" className="w-100">
            <div className="group border border-white w-100 h-full min-h-110">
                <div className="overflow-hidden w-full h-50">
                    <Image unoptimized src={project.imageLink} alt={`Picture of ${project.author}'s project: ${project.Name}`} width={400} height={300} className="w-full object-top object-cover transition-all group-hover:grayscale group-hover:scale-125 size-full" placeholder="blur" blurDataURL="/assets/placeholder.webp"/>
                </div>
                <div className="flex flex-col items-start p-4 text-wrap overflow-visible w-100 gap-1">
                    <h3 className="text-3xl max-md:text-4xl">{project.Name}</h3>
                    <p className="text-xl max-md:text-2xl text-gray-500 text-left wrap-break-word w-full">@{project.author?.replaceAll(" ","_").toLowerCase()}</p>
                    <p className="text-xl text-wrap text-left">{project.description}</p>
                </div>
            </div>
        </Link>
    )
}