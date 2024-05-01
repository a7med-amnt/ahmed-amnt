import { Link } from "#rrd";
import { Anchor, Portal, Burger } from "#mc";
import { useDisclosure } from "#mh";
import style from "./style.module.css";

export default function () {
    const [opened, { toggle }] = useDisclosure();
    let links = [
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
        { label: "Contact As", path: "/contact-as" }
    ].map(link => (
        <Anchor key={link.label} mx="sm" component={Link} to={link.path}>
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
