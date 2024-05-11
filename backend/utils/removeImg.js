import path from "path";
import { unlink } from "fs";
import { projectsImgsPath } from "#constants/paths.js";

export function removeProjectImg(imgname) {
    const imgPath = path.join(projectsImgsPath, imgname);
    unlink(imgPath, err => {
        if (err) {
            console.log(err);
            return
            //throw err;
        }
        console.log("file was deleted");
    });
}
