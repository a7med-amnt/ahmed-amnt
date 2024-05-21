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
import { handleProjectImg } from "#utils/ele";
import { useTranslation } from "#ri18n";

export default function ({ project, onClick }) {
    let { _id, img } = project;
    const { t, i18n } = useTranslation();
    return (
        <Box
            onClick={() => {
                onClick({ _id });
            }}
            p="lg"
            style={{ flexBasis: 300, flexGrow: "1" }}
        >
            <AspectRatio ratio={16 / 9}>
                <Image mb={10} src={handleProjectImg(img)} />
            </AspectRatio>
            <Title order={5}>{t("title", { ns: _id })}</Title>
        </Box>
    );
}
