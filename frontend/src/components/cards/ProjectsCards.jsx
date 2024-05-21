import ProjectCard from "./ProjectCard";
import ProjectsCardsSkeletons from "#components/skeletons/Projects";
import { useGetProjectsQuery } from "#api/project";

export default function ({onClick}) {
  onClick = onClick|| function () {
    
  }
    let projects = [];
    const { data, isSuccess,isLoading } = useGetProjectsQuery();
    if (isSuccess) projects = data.projects;
    if(isLoading) return <ProjectsCardsSkeletons/>
    return projects.map(project => (
        <ProjectCard onClick={onClick} key={project?._id} project={project} />
    ));
}
