import mongoose from "mongoose";

export default {
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }]
};
