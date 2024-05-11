import multer from "multer";
import path from "path";
import uniqid from "uniqid";
import {projectsImgsPath} from "#constants/paths.js";

const storage = multer.diskStorage({
    destination: (rq, file, cb) => {
        cb(null, projectsImgsPath);
    },
    filename: (rq, file, cb) => {
        cb(null, uniqid("", "-"+file.originalname));
    }
});

export const projectImgUploader = multer({ storage });
