import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import schema from "#schemas/userModel.js";
const userSchema = new mongoose.Schema(schema, { timestamps: true });

userSchema.pre("save", function () {
    this.password = bcryptjs.hashSync(this.password, process.env.BCRYPTJS_SALT);
});
userSchema.methods.genToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
        expiresIn: "1d"
    });
};

userSchema.methods.comPas = function (password) {
    if (password == this.password) return true;
    else return false;
};

userSchema.statics.findBySecretWord = async function (secretWord) {
    return await this.findOne({ secretWord });
};
userSchema.statics.updateOwner = async function (data = {}) {
    const ownerId = process.env.OWNER_ID;

    return await this.findOneAndUpdate({ _id: ownerId }, data);
};
userSchema.statics.getOwner = async function () {
    const ownerId = process.env.OWNER_ID;

    return await this.findById(ownerId);
};

const User = mongoose.model("User", userSchema);

export default User;
