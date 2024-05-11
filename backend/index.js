import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "#configs/connectDb.js";
import router from "#routers/router.js";

const app = express();
dotenv.config();
connectDb();

app.use(cors());
app.use("/public", express.static(path.join(path.resolve(), "public")));
app.use(router);

let port = process.env.PORT || 4948;
app.listen(port, function () {
    console.log(
        "server listen on port " +
            port +
            " the URL http://localhost:" +
            port +
            " -_-"
    );
});
