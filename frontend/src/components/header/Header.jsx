import Nav from "#components/nav/Nav";
import { Box } from "#mc";
export default function () {
    return (
        <Box bg="cyan" component="header" style={{height: 70}}>
            <Nav />
        </Box>
    );
}
