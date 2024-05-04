import { Link } from "#rrd";
import {
    Box,
    Group,
    Text,
    Title,
    Button,
    ActionIcon,
    Image,
    Anchor
} from "#mc";
import { IconBrandGithub } from "#ti";
export default function ({ project }) {
    /* let {
        name,
        title,
        description,
        _id,
        imgSrc,
        projectUrl,
        projectGithubUrl
    } = project;*/
    let { title, type, description, imgSrc, projectUrl, projectGithubUrl } =
        project;
    return (
        <Box p="lg">
            <Image mb={10} src={"/imgs/" + imgSrc} />
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
        </Box>
    );
}
