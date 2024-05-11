import mongoose from "mongoose";

export default {
    name: String,
    secretWord: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    shortBio: String,
    bio: String
};
