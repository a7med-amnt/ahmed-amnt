import mongoose from "mongoose"
 export default function () {
    mongoose
        .connect(process.env.DB_URL)
        .then(function () {
            console.log("DB connected");
        })
        .catch(function (e) {
            console.log("DB not connected", e);
        });
};
