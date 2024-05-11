import eah from "express-async-handler";
import User from "#models/user.js";
import error from "#utils/error.js";

export const update = eah(async function (rq, rs, nx) {
    const userId = rq.user._id;
    const body = rq.body;

    await User.findOneAndUpdate({ _id: userId }, body);
    rs.json({ messge: "profile updated successfully" });
});
export const changeName = eah(async function (rq, rs, nx) {
    const userId = rq.user._id;
    const name = rq.body.name;

    await User.findOneAndUpdate({ _id: userId }, { name });
    rs.json({ messge: "name changed successfully" });
});

export const changeShortBio = eah(async function (rq, rs, nx) {
    const userId = rq.user._id;
    const shortBio = rq.body.shortBio;

    await User.findOneAndUpdate({ _id: userId }, { shortBio });
    rs.json({ messge: "Short-bio changed successfully" });
});

export const changeBio = eah(async function (rq, rs, nx) {
    const userId = rq.user._id;
    const bio = rq.body.bio;

    await User.findOneAndUpdate({ _id: userId }, { bio });
    rs.json({ messge: "bio changed successfully" });
});

export const getProfile = eah(async function (rq, rs, nx) {
    const userId = rq.user._id;

    let user = await User.findById(userId);
    
    rs.json({ messge: "find user successfully",user });
});
