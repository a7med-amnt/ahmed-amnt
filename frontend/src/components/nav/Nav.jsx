import { Link } from "#rrd";
import { Anchor, Portal, Burger, useMantineTheme } from "#mc";
import { useDisclosure } from "#mh";
import style from "./style.module.css";

export default function () {
    const [opened, { toggle }] = useDisclosure();
    let theme = useMantineTheme();
    let links = [
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
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
