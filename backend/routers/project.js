import express from "express";
import {
    add,
    update,
    changeImg,
    deleteProject,
    getProjects,
    getProject
} from "#controllers/project.js";
import { projectImgUploader } from "#middlewares/uploaders.js";

const router = express.Router();

router.route("/").post(projectImgUploader.single("img"), add);
router.route("/").get(getProjects);
router.route("/:projectId").get(getProject);
router.route("/:projectId").put(projectImgUploader.single("img"), update);
router.route("/:projectId/img").patch(changeImg);
router.route("/:projectId").delete(deleteProject);

export default router;
