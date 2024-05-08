import eah from "express-async-handler";
import Users from "#models/user.js";
import error from "#utils/error.js";

//signup controller
export const signup = eah(async function (rq, rs, nx) {
    let userData = rq.validData;

    // check user if he already exsited
    let user = null;
    user = await Users.findByEmail(userData.email);
    if (user) return nx(error("email already used"));

    // save user in database
    const newUsers = new Users(userData);
    await newUsers.save();

    // response to the user
    rs.json({ message: "signup successfully" });
});

// signin controller
export const signin = eah(async function (rq, rs, nx) {
    const userData = rq.validData;

    // check user if he already signup
    let user = null;
    user = await Users.findByEmail(userData.email);
    if (!user) return nx(error("user not found"));

    // compare the password
    if (!user.comPas(userData.password)) return nx(error("incorrect password"));

    // generate web token
    const token = user.genToken();

    // response to the user
    rs.json({ message: "signin successfully", token });
});
