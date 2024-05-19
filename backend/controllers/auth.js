import eah from "express-async-handler";
import Users from "#models/user.js";
import error from "#utils/error.js";

// signin controller
export const signin = eah(async function (rq, rs, nx) {
    const userData = rq.validData;

    let user = null;
    user = await Users.findBySecretWord(userData.secretWord);
    if (!user) return nx(error("error signin"));

    // compare the password
    if (!user.comPas(userData.password)) return nx(error("error signin"));

    // generate web token
    const token = user.genToken();

    // response to the user
    rs.json({ message: "signin successfully", token });
});
