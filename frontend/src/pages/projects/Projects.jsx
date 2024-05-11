import { Flex } from "#mc";
import ProjectsCards from "#components/cards/ProjectsCards";
export default function () {
    return (
        <Flex wrap="wrap"  direction={{ base: "column", md: "row" }}>
            <ProjectsCards />
        </Flex>
    );
}
