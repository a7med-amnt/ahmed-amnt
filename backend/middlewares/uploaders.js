import multer from "multer";
import path from "path";
import uniqid from "uniqid";
import {projectsImgsPath} from "#constants/paths.js";
import {checkProjectImgDir} from "#utils/fs.js";

const storage = multer.diskStorage({
    destination: (rq, file, cb) => {
      checkProjectImgDir()
        cb(null, projectsImgsPath);
    },
    filename: (rq, file, cb) => {
        cb(null, uniqid("", "-"+file.originalname));
    }
});

export const projectImgUploader = multer({ storage });
