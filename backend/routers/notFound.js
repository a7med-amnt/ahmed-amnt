import express from "express";
import { notFoundRoute } from "#controllers/notFound.js";

const router = express.Router();

router.use(notFoundRoute);

export default router;
