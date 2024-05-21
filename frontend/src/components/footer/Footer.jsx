import { Box, Text, Center } from "#mc";
export default function () {
    return (
        <Center
            component="footer"
            style={{ height: 50, borderTop: "solid 1px" }}
        >
            <Text>
                By{" "}
                <Box component="span" c="primary">
                    Me
                </Box>
            </Text>
        </Center>
    );
}
