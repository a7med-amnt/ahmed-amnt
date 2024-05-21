import { Link } from "#rrd";
import { Anchor, Group } from "#mc";
import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook } from "#ti";
import { useGetUserQuery } from "#api/user";

export default function () {
    let urls = {};
    let { data, isSuccess } = useGetUserQuery();
    if (isSuccess) urls = data.user.urls;
    return (
        <Group m={{ base: "md", md: "0" }} mx="md">
            <Anchor component={Link} to={urls.github}>
                <IconBrandGithub />
            </Anchor>
            <Anchor component={Link} to={urls.linkedin}>
                <IconBrandLinkedin />
            </Anchor>
            <Anchor component={Link} to={urls.facebook}>
                <IconBrandFacebook />
            </Anchor>
        </Group>
    );
}
