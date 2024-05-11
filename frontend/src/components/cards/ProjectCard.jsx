import { Link } from "#rrd";
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
import { IconBrandGithub } from "#ti";
import { baseUrl } from "#constants/api";
export default function ({ project }) {
    let { _id, title, type, description, img, projectUrl, projectGithubUrl } =
        project;
    const imgSrc = baseUrl + "/public/imgs/projects/" + img;

    return (
        <Box p="lg">
            <AspectRatio ratio={19 / 9}>
                <Image mb={10} src={imgSrc} />
            </AspectRatio>
            <Anchor component={Link} to={"/projects/" + _id}>
                <Title order={3}>{title}</Title>
            </Anchor>
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
