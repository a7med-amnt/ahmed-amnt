import eah from "express-async-handler";
import jwt from "jsonwebtoken";
import error from "#utils/error.js";
import User from "#models/user.js";

export default eah(async function (rq, rs, nx) {
    const token = rq.headers["authorization"];
    if (!token) return nx(error("token not provided"));
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decodedToken._id);
        if (!user) return nx(error("user not found with this token", 404));
        rq.user = user;
        nx();
    } catch (e) {
        console.log(e);
        return nx(error("error token"));
    }
});
