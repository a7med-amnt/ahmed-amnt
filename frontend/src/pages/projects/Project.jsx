import { Link, useParams } from "#rrd";
import {
    Box,
    Group,
    Text,
    Title,
    Button,
    ActionIcon,
    Image,
    Anchor,
    AspectRatio,
    Menu
} from "#mc";
import {
    useGetProjectQuery,
    useDeleteProjectMutation,
    useUpdateProjectMutation
} from "#api/project";
import { IconBrandGithub, IconEdit, IconTrash, IconDotsVertical } from "#ti";
import { handleProjectImg } from "#utils/ele";
import { useTranslation } from "#ri18n";
import ProjectSkeleton from "#components/skeletons/Project";
export default function () {
    let project = {};
    let { projectId } = useParams();
    const { i18n } = useTranslation();
    const t = i18n.getFixedT(null, projectId);

    let { data, isSuccess,isLoading } = useGetProjectQuery(projectId);
    let [updateProject] = useUpdateProjectMutation();
    let [deleteProject] = useDeleteProjectMutation();

    if (isSuccess) {
        project = data.project;
    }
    let { _id, img, websiteUrl, githubUrl } = project;
    function handleDeleteProject() {
        deleteProject(_id);
    }
    if (isLoading) return <ProjectSkeleton />;
    return (
        <Box p="lg">
            <AspectRatio ratio={16 / 9}>
                <Image mb={10} src={handleProjectImg(img)} />
            </AspectRatio>
            <Title order={3}>{t("title")}</Title>
            <Text my={10}>{t("description")}</Text>
            <Group justify="space-between">
                <ActionIcon>
                    <Anchor target="blank" component={Link} to={githubUrl}>
                        <IconBrandGithub />
                    </Anchor>
                </ActionIcon>
                <Anchor target="blank" component={Link} to={websiteUrl}>
                    Visit
                </Anchor>
            </Group>
        </Box>
    );
}
