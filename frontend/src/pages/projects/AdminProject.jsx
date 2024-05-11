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
    AspectRatio
} from "#mc";
import { useDisclosure } from "#mh";
import {
    useGetProjectQuery,
    useDeleteProjectMutation,
    useUpdateProjectMutation
} from "#api/project";
import { IconBrandGithub, IconEdit, IconTrash } from "#ti";
import UpdateProject from "#components/modals/UpdateProject";
import { baseUrl } from "#constants/api";

export default function () {
    let project = {};
    let { projectId } = useParams();

    let [updateProject] = useUpdateProjectMutation();
    let [deleteProject, result] = useDeleteProjectMutation();
    let { data, isSuccess } = useGetProjectQuery(projectId);

    if (isSuccess) project = data.project;

    const [
        isUpdateProjectModalOpened,
        { open: openUpdateProjectModal, close: closeUpdateProfileModal }
    ] = useDisclosure(false);

    let { _id, title, type, description, img, projectUrl, projectGithubUrl } =
        project;
    const imgSrc = baseUrl + "/public/imgs/projects/" + img;

    function handleDeleteProject() {
        deleteProject(_id);
    }

    return (
        <Box p="lg">
            <AspectRatio ratio={16 / 9}>
                <Image mb={10} src={imgSrc} />
            </AspectRatio>
            <Title order={3}>{title}</Title>
            <Text my={10}>{description}</Text>
            <Group justify="space-between">
                <ActionIcon>
                    <Anchor component={Link} to={projectGithubUrl}>
                        <IconBrandGithub />
                    </Anchor>
                </ActionIcon>
                <Anchor component={Link} to={projectUrl}>
                    Visit
                </Anchor>
            </Group>
            <Group justify="space-between">
                <ActionIcon onClick={openUpdateProjectModal}>
                    <IconEdit />
                </ActionIcon>
                <ActionIcon onClick={handleDeleteProject}>
                    <IconTrash />
                </ActionIcon>
            </Group>
            <UpdateProject
                close={closeUpdateProfileModal}
                isOpened={isUpdateProjectModalOpened}
                projectId={_id}
            />
        </Box>
    );
}
