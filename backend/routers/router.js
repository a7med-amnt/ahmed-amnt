import express from "express";
//---middlewares
import error from "#middlewares/error.js";
import checkTokon from "#middlewares/checkToken.js";
//---routers
import notFound from "#routers/notFound.js";
import home from "#routers/home.js";
import auth from "#routers/auth.js";

const router = express.Router();

router.use(express.json());

//---routes
router.use("/", home);
router.use("/api/v1/auth", auth);

//---not found
router.use("*", notFound);

//---error handler
router.use(error);

export default router;
