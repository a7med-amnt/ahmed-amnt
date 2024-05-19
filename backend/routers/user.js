import express from "express";
import {
    changeName,
    changeBio,
    changeShortBio,
    update,
    getProfile,
    getProfilePrivate
} from "#controllers/user.js";
import checkTokon from "#middlewares/checkToken.js";

const router = express.Router();

router.route("/").get(getProfile);
router.route("/private").get(checkTokon,getProfilePrivate);
router.route("/").put(checkTokon,update);
router.route("/name").patch(checkTokon,changeName);
router.route("/short-bio").patch(checkTokon,changeShortBio);
router.route("/bio").patch(checkTokon,changeBio);

export default router;
