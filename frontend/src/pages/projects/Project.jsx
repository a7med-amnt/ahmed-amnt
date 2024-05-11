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
import { baseUrl } from "#constants/api";

export default function () {
    let project = {};
    let { projectId } = useParams();

    let { data, isSuccess } = useGetProjectQuery(projectId);
    let [updateProject] = useUpdateProjectMutation();
    let [deleteProject] = useDeleteProjectMutation();

    if (isSuccess) project = data.project;

    let { _id, title, description, img, websiteUrl, githubUrl } = project;
    const imgSrc = baseUrl + "/public/imgs/projects/" + img;

    function handleDeleteProject() {
        deleteProject(_id);
    }

    return (
        <Box p="lg">
            <Menu>
                <Menu.Target>
                    <IconDotsVertical />
                </Menu.Target>
                <Menu.Dropdown>
                    <Anchor
                        component={Link}
                        to={"/projects/update-project/" + _id}
                    >
                        <Menu.Item leftSection={<IconEdit />}>
                            Edit this project
                        </Menu.Item>
                    </Anchor>
                    <Menu.Item
                        onClick={handleDeleteProject}
                        c="red"
                        leftSection={<IconTrash />}
                    >
                        Delete this project
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <AspectRatio ratio={16 / 9}>
                <Image mb={10} src={imgSrc} />
            </AspectRatio>
            <Title order={3}>{title}</Title>
            <Text my={10}>{description}</Text>
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
