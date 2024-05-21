import express from "express";
//---middlewares
import error from "#middlewares/error.js";
import checkToken from "#middlewares/checkToken.js";
//---routers
import notFound from "#routers/notFound.js";
import home from "#routers/home.js";
import auth from "#routers/auth.js";
import user from "#routers/user.js";
import owner from "#routers/owner.js";
import project from "#routers/project.js";

const router = express.Router();

router.use(express.json());

//---routes
router.use("/", home);
router.use("/api/v1/auth", auth);
router.use("/api/v1/user", user);
router.use("/api/v1/owner",checkToken, owner);
router.use("/api/v1/projects", project);

//---not found
router.use("*", notFound);

//---error handler
router.use(error);

export default router;
