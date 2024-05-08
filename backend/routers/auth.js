import express from "express";
import { signup, signin } from "#controllers/auth.js";
import dataValidator from "#middlewares/dataValidator.js";
import {  signinValidation } from "#schemas/authValidation.js";

const router = express.Router();

router.route("/signin").post(dataValidator(signinValidation), signin);

export default router;
