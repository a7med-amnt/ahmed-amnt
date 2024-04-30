import { Box } from "#mc";
export default function ({ children }) {
    return (
        <Box bg="red" component="main" style={{ height: "calc(100vh - 70px)" }}>
            {children}
        </Box>
    );
}
