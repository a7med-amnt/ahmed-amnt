import eah from "express-async-handler";
import Project from "#models/project.js";
import error from "#utils/error.js";
import { removeProjectImg } from "#utils/removeImg.js";

export const add = eah(async function (rq, rs, nx) {
    const project = rq.body;
    const file = rq.file;

    if (file) project.img = file.filename;
    
    //project.langs = JSON.parse(project.langs);

    let newProject = new Project(project);
    await newProject.save();

    rs.json({ message: "project added successfully" });
});

export const getProject = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;

    let project = await Project.findById(projectId);
    if (!project) {
        project = {};
        rs.json({ message: "project not found", project });
    }
    rs.json({ message: "find project successfully", project });
});

export const getProjects = eah(async function (rq, rs, nx) {
    let projects = await Project.find().sort({createdAt:-1});

    rs.json({ message: "find projects successfully", projects });
});

export const update = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const project = rq.body;
    const file = rq.file;
    let currentProject = await Project.findById(projectId);

    if (file) {
        project.img = file.filename;
        if (currentProject.img) removeProjectImg(currentProject.img);
    }
    project.langs = JSON.parse(project.langs);
    await Project.findOneAndUpdate({ _id: projectId }, project);

    rs.json({ message: "project updated successfully" });
});

export const changeTitle = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const title = rq.body.title;

    await Project.findOneAndUpdate({ _id: projectId }, { title });
    rs.json({ message: "title changed successfully" });
});

export const changeDescription = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const description = rq.body.description;

    await Project.findOneAndUpdate({ _id: projectId }, { description });
    rs.json({ message: "description changed successfully" });
});

export const changeImg = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const img = rq.file.filename;

    await Project.findOneAndUpdate({ _id: projectId }, { img });
    rs.json({ message: "image changed successfully" });
});

export const changeType = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const type = rq.body.type;

    await Project.findOneAndUpdate({ _id: projectId }, { type });
    rs.json({ message: "type changed successfully" });
});

export const deleteProject = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;

    let currentProject = await Project.findById(projectId);

    if (currentProject.img) removeProjectImg(currentProject.img);

    await Project.findOneAndDelete({ _id: projectId });
    rs.json({ message: "deleted successfully" });
});
