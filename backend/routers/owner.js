import express from "express";
import {
    changeName,
    changeBio,
    changeShortBio,
    update,
    getOwner
} from "#controllers/owner.js";

const router = express.Router();

router.route("/").get(getOwner);
router.route("/").put(update);
router.route("/name").patch(changeName);
router.route("/short-bio").patch(changeShortBio);
router.route("/bio").patch(changeBio);

export default router;
