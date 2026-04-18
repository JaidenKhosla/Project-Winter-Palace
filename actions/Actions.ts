"use server"

import { ProjectProps } from "@/util/Project";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export async function getProjects(): Promise<ProjectProps[]>
{
    return fetch(process.env.MONGO_DB_URL!, {
        method: "POST",
        body: JSON.stringify({"Action" : "Access"})
    })
    .then(
        response=>{
            console.log(process.env.MONO_DB_URL);
            if(response.ok)
                return response.json()
        }
    )
    .then(
        json => {
            
          
            const projects = JSON.parse(json).body;
            // return "D:"

            return projects;
        }
    )
    .catch(
        err=>err
    );
}

type BaseProject = Omit<ProjectProps, "imageLink">;

export async function uploadProject(project: BaseProject, imageFile: File): Promise<string>
{

    const imageLink = await uploadImage(imageFile);

    // return `Image Link: ${imageLink}`

    return fetch(process.env.MONGO_DB_URL!, {
        method: "POST",
        body: JSON.stringify({
            "Action": "Add",
            "Name": project.Name,
            "author": project.author,
            "description": project.description,
            "imageLink": imageLink,
            "projectLink": project.projectLink
        })

    }).then(res=>{
        if(!res.ok) return null;

        return res.json();
    }).then(data=>JSON.parse(data)["body"])
    .catch(()=>null);
}

interface RequestUrl {
    uploadURL: string,
    Key: string
}

export async function uploadImage(file: File)
{
    return fetch(process.env.REQUEST_URL!, {
        method: "POST",
        body: JSON.stringify({
            "type": file.type
        })
    }).then(res=>res.json())
    .then(async (data: RequestUrl) => {

        const headers = new Headers();
        headers.append("Content-Type", file.type);

        const photo = await fetch(data.uploadURL, {
            method: "PUT",
            headers: headers,
            body: file
        })
        .then(()=>process.env.S3_BUCKET_URL+data.Key)
        .catch(()=>null);

        return photo;
    })
}

const s3 = new S3Client({
    region: "us-east-2",
});

export async function fetchGalleryImages()
{
    const listCommand = new ListObjectsCommand({
        Bucket: process.env.GALLERY_BUCKET,
    })


    const output = (await s3.send(listCommand))
    .Contents?.map(
        content=>`https://${process.env.GALLERY_BUCKET}.s3.us-east-2.amazonaws.com/${content.Key}`
    );

    return output;
    
}