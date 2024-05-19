import mongoose from "mongoose";
export default {
    secretWord: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    langs: {
       ar:{
         overview: String,
                    bio: String,
                    article: String,
                    name: String
       },
       en:{
         overview: String,
                    bio: String,
                    article: String,
                    name: String
       }
    }
};
