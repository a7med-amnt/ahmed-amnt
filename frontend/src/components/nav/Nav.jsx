import { Link } from "#rrd";
import { Anchor, Portal, Burger, useMantineTheme } from "#mc";
import { useDisclosure } from "#mh";
import style from "./style.module.css";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();
    const [opened, { toggle }] = useDisclosure();
    let theme = useMantineTheme();
    let links = [
        { label: t("about"), path: "/about" },
        { label: t("projects"), path: "/projects" },
        
    ].map(link => (
        <Anchor
            fz={21}
            my={5}
            key={link.label}
            mx="sm"
            c="re.1"
            component={Link}
            to={link.path}
            onClick={toggle}
        >
            {link.label}
        </Anchor>
    ));
    return (
        <>
            <Burger
                className={style["toggle-nav-btn"]}
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
            />
            <nav className={style.nav + " " + (opened ? style.active : "")}>
                {links}
            </nav>
        </>
    );
}
