import { Box, Text, Center } from "#mc";
export default function () {
    return (
        <Center
            component="footer"
            mt="md"
            style={{ height: 50, borderTop: "solid 1px" }}
        >
            <Text>
                By{" "}
                <Box component="span" c="primary">
                    a7med.amnt@gmail.com
                </Box>
            </Text>
        </Center>
    );
}
