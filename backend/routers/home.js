import express from "express";
import { instructions } from "#controllers/home.js";

const router = express.Router();

router.route("/").get(instructions);

export default router;
