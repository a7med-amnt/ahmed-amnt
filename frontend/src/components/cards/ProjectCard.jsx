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
            <Anchor component={Link} to={"/projects/" + _id}>
                <AspectRatio ratio={16 / 9}>
                    <Image mb={10} src={imgSrc} />
                </AspectRatio>
                <Title order={5}>{title}</Title>
            </Anchor>
        </Box>
    );
}
