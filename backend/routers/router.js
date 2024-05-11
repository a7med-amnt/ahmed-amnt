import express from "express";
//---middlewares
import error from "#middlewares/error.js";
import checkTokon from "#middlewares/checkToken.js";
//---routers
import notFound from "#routers/notFound.js";
import home from "#routers/home.js";
import auth from "#routers/auth.js";
import user from "#routers/user.js";
import project from "#routers/project.js";

const router = express.Router();

router.use(express.json());

//---routes
router.use("/", home);
router.use("/api/v1/auth", auth);
router.use("/api/v1/user",checkTokon, user);
router.use("/api/v1/projects",checkTokon, project);

//---not found
router.use("*", notFound);

//---error handler
router.use(error);

export default router;
