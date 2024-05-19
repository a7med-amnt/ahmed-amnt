import { Link, Outlet } from "#rrd";
import { Stack, Group, Divider, Title, Text, ActionIcon, Anchor } from "#mc";
import { useDisclosure } from "#mh";
import { IconPlus, IconEdit } from "#ti";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();
    let links = [
        { label: t("updateProfile"), path: "update-profile" },
        { label: t("addProject"), path: "add-project" },
        { label: t("projects"), path: "projects" }
    ];
    let Links = links.map(link => (
        <Anchor key={link.label} component={Link} to={link.path}>
            <Text order={6}>{link.label}</Text>
        </Anchor>
    ));
    return (
        <>
            <Group>{Links}</Group>
            <Divider my="md" />
            <Stack>
                <Outlet />
            </Stack>
        </>
    );
}
