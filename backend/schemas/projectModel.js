import mongoose from "mongoose";

export default {
    img: String,
    websiteUrl: String,
    githubUrl: String,
    langs: {
        ar: {
            title: String,
            description: String
        },
        en: {
            title: String,
            description: String
        }
    }
};
