import mongoose from "mongoose";
import schema from "#schemas/projectModel.js";
const projectModel = new mongoose.Schema(schema, { timestamps: true });

const Project = mongoose.model("Project", projectModel);

export default Project;
