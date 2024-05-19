import ProjectCard from "./ProjectCard";
import { useGetProjectsQuery } from "#api/project";

export default function ({onClick}) {
  onClick = onClick|| function () {
    
  }
    let projects = [];
    const { data, isSuccess } = useGetProjectsQuery();
    if (isSuccess) projects = data.projects;
    
    return projects.map(project => (
        <ProjectCard onClick={onClick} key={project?._id} project={project} />
    ));
}
