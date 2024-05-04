import { Flex } from "#mc";
import ProjectsCards from "./components/ProjectsCards";
export default function () {
    return (
        <Flex wrap="wrap"  direction={{ base: "column", md: "row" }}>
            <ProjectsCards />
        </Flex>
    );
}
