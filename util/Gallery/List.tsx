"use server"

import { promises } from "fs";
import path from "path"

export default async function getChildren(path_arg: string)
{
    const dir = path.join(process.cwd(), "public", path_arg);
    const files = await promises.readdir(dir);

    return files.map(val=> `/${path_arg}/${val}`).filter(val=>val.endsWith(".png")||val.endsWith(".JPG")||val.endsWith(".JPEG"));
}