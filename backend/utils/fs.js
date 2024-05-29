import fs from "fs";
import path from "path";
export function checkProjectImgDir() {
  let projectsImgsDir = path.join(
                path.resolve(),
                "public",
                "imgs",
                "projects"
            );
    try {
        if (!fs.existsSync(projectsImgsDir)) {
            let publicDir = path.join(path.resolve(), "public");
            let imgsDir = path.join(path.resolve(), "public", "imgs");
            
            if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir);
            }
            if (!fs.existsSync(imgsDir)) {
                fs.mkdirSync(imgsDir);
            }
            fs.mkdirSync(projectsImgsDir);
        }
    } catch (e) {
        console.log(e);
    }
}
