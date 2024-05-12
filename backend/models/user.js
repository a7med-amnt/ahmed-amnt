import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import schema from "#schemas/userModel.js";
const userSchema = new mongoose.Schema(schema, { timestamps: true });

userSchema.pre("save", function () {
    this.password = bcryptjs.hashSync(this.password, process.env.BCRYPTJS_SALT);
});
userSchema.methods.genToken = function () {
    console.log("this", this);
    console.log("_id", this._id);
    let token = jwt.sign({ _id: this._id }, process.env.JWT_KEY);
    console.log("token", token);
    let decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log("decodedToken", decodedToken);
    return token;
};

userSchema.methods.comPas = function (password) {
    if (password == this.password) return true;
    else return false;
};
userSchema.statics.findBySecretWord = async function (secretWord) {
    return await this.findOne({ secretWord });
};

const User = mongoose.model("User", userSchema);

export default User;
