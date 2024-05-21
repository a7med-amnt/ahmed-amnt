import eah from "express-async-handler";
import User from "#models/user.js";
import error from "#utils/error.js";

export const update = eah(async function (rq, rs, nx) {
    const body = rq.body;
    await User.updateOwner(body);
    rs.json({ message: "profile updated successfully" });
});

export const changeName = eah(async function (rq, rs, nx) {
    const name = rq.body.name;

    await User.updateOwner({ name });
    rs.json({ message: "name changed successfully" });
});

export const changeShortBio = eah(async function (rq, rs, nx) {
    const shortBio = rq.body.shortBio;

    await User.updateOwner({ shortBio });
    rs.json({ message: "Short-bio changed successfully" });
});

export const changeBio = eah(async function (rq, rs, nx) {
    const bio = rq.body.bio;

    await User.updateOwner({ bio });
    rs.json({ message: "bio changed successfully" });
});

export const getOwner = eah(async function (rq, rs, nx) {
    let user = await User.getOwner();

    rs.json({ message: "find user successfully", user });
});
