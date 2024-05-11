import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import schema from "#schemas/userModel.js";
const userSchema = new mongoose.Schema(schema, { timestamps: true });

userSchema.pre("save", function () {
    this.password = bcryptjs.hashSync(this.password, process.env.BCRYPTJS_SALT);
});
userSchema.methods.genToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_KEY);
};
userSchema.methods.comPas = function (password) {
    if(password == this.password)return true
    else return false
};
userSchema.statics.findBySecretWord = async function (secretWord) {
    return await this.findOne({ secretWord });
};

const User = mongoose.model("User", userSchema);

export default User;
