import ProjectCard from "./ProjectCard";

export default function () {
    let projects = [
        {
            title: "Fashion Studio Website",
            type: "Website",
            imgSrc: "project-1.jpg"
        },
        {
            title: "NFT collection Website",
            type: "Website Template",
            imgSrc: "project-2.jpg"
        },
        {
            title: "React Portfolio Website",
            type: "Portfolio Website",
            description:
                "A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.",
            imgSrc: "project-3.jpg"
        },
        {
            title: "Agency Website Template",
            type: "Website Template",
            imgSrc: "project-4.jpg"
        },
        {
            title: "DevDreaming",
            type: "Blog Website",
            imgSrc: "project-5.jpg"
        },
    ];

    return projects.map(project => (
        <ProjectCard key={project} project={project} />
    ));
}
