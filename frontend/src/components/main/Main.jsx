import { Box } from "#mc";
export default function (props) {
    return (
        <Box
            component="main"
            style={{ minHeight: "calc(100vh - 70px)" }}
           
            pt={40}
            {...props}
        >
            {props.children}
        </Box>
    );
}
