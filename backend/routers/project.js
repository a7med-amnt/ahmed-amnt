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
import checkTokon from "#middlewares/checkToken.js";

const router = express.Router();

router.route("/").get(getProjects);
router.route("/:projectId").get(getProject);
router.route("/").post(checkTokon, projectImgUploader.single("img"), add);
router
    .route("/:projectId")
    .put(checkTokon, projectImgUploader.single("img"), update);
router.route("/:projectId/img").patch(checkTokon, changeImg);
router.route("/:projectId").delete(checkTokon, deleteProject);

export default router;
