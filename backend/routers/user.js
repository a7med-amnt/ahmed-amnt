import express from "express";
import {
    changeName,
    changeBio,
    changeShortBio,
    update,getProfile
} from "#controllers/user.js";

const router = express.Router();

router.route("/").get(getProfile);
router.route("/").put(update);
router.route("/name").patch(changeName);
router.route("/short-bio").patch(changeShortBio);
router.route("/bio").patch(changeBio);

export default router;
