import { Skeleton, Box, AspectRatio } from "#mc";
export default function () {
    return (<>
        <Box p="lg" style={{ flexBasis: 300, flexGrow: "1" }}>
            <AspectRatio ratio={16 / 9}>
                <Skeleton />
            </AspectRatio>
            <Skeleton my="md" height={25} width={"40%"} radius="md" />
        </Box>
        <Box p="lg" style={{ flexBasis: 300, flexGrow: "1" }}>
            <AspectRatio ratio={16 / 9}>
                <Skeleton />
            </AspectRatio>
            <Skeleton my="md" height={25} width={"40%"} radius="md" />
        </Box>
        <Box p="lg" style={{ flexBasis: 300, flexGrow: "1" }}>
            <AspectRatio ratio={16 / 9}>
                <Skeleton />
            </AspectRatio>
            <Skeleton my="md" height={25} width={"40%"} radius="md" />
        </Box>
        </>
    );
}
