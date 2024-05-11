import eah from "express-async-handler";
import Project from "#models/project.js";
import error from "#utils/error.js";
import { removeProjectImg } from "#utils/removeImg.js";

export const add = eah(async function (rq, rs, nx) {
    const project = rq.body;
    const file = rq.file;

    if (file) project.img = file.filename;
    let newProject = new Project(project);
    await newProject.save();

    rs.json({ messge: "project added successfully" });
});

export const getProject = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;

    let project = await Project.findById(projectId);
    if (!project) project = {};
    rs.json({ messge: "find project successfully", project });
});

export const getProjects = eah(async function (rq, rs, nx) {
    let projects = await Project.find();

    rs.json({ messge: "find projects successfully", projects });
});

export const update = eah(async function (rq, rs, nx) {
    const project = rq.body;
    const file = rq.file;
    const projectId = rq.params.projectId;
    let currentProject = await Project.findById(projectId);

    if (file) {
        project.img = file.filename;
    if (currentProject.img) removeProjectImg(currentProject.img);
    }

    await Project.findOneAndUpdate({ _id: projectId }, project);

    rs.json({ messge: "project updated successfully" });
});

export const changeTitle = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const title = rq.body.title;

    await Project.findOneAndUpdate({ _id: projectId }, { title });
    rs.json({ messge: "title changed successfully" });
});

export const changeDescription = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const description = rq.body.description;

    await Project.findOneAndUpdate({ _id: projectId }, { description });
    rs.json({ messge: "description changed successfully" });
});

export const changeImg = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const img = rq.file.filename;

    await Project.findOneAndUpdate({ _id: projectId }, { img });
    rs.json({ messge: "image changed successfully" });
});

export const changeType = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    const type = rq.body.type;

    await Project.findOneAndUpdate({ _id: projectId }, { type });
    rs.json({ messge: "type changed successfully" });
});

export const deleteProject = eah(async function (rq, rs, nx) {
    const projectId = rq.params.projectId;
    
    let currentProject = await Project.findById(projectId);

    if (currentProject.img) removeProjectImg(currentProject.img);

    await Project.findOneAndDelete({ _id: projectId });
    rs.json({ messge: "deleted successfully" });
});
