import eah from "express-async-handler";
import User from "#models/user.js";
import error from "#utils/error.js";

export const getUser = eah(async function (rq, rs, nx) {
    let user = await User.getOwner();

    rs.json({
        message: "find user successfully",
        user: { langs: user.langs, urls: user.urls,email:user.email }
    });
});
