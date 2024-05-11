import Nav from "#components/nav/Nav";
import Logo from "#components/logo/Logo";
import Actions from "#components/actions/Actions";
import { Group } from "#mc";
export default function () {
    return (
        <Group
            justify="space-between"
            component="header"
            style={{ height: 70, position: "relative", zIndex: 10 }}
        >
            <Nav />
            <Logo />
            <Actions />
        </Group>
    );
}
