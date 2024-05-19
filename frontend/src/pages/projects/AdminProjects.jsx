import { useNavigate } from "#rrd";
import { Flex, Title } from "#mc";
import ProjectsCards from "#components/cards/ProjectsCards";
import { useTranslation } from "#ri18n";

export default function () {
    const nav = useNavigate();
    const { t } = useTranslation();
    function handleClick({ _id }) {
        nav("/dashboard/projects/update-project/" + _id);
    }
    return (
        <>
            <Title mb="xl">{t("projects")}</Title>

            <Flex wrap="wrap" direction={{ base: "column", md: "row" }}>
                <ProjectsCards onClick={handleClick} />
            </Flex>
        </>
    );
}
