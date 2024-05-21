import { Skeleton, Box, AspectRatio } from "#mc";
export default function () {
    return (
        <>
            <Box p="lg">
                <AspectRatio ratio={16 / 9}>
                    <Skeleton />
                </AspectRatio>
                <Skeleton my="md" height={25} width={"40%"} radius="md" />
                <Skeleton height={10} width={"70%"} radius="sm" />
                <Skeleton my="sm" height={10} width={"80%"} radius="sm" />
                <Skeleton height={10} width={"50%"} radius="sm" />
                <Skeleton my="sm" height={10} width={"90%"} radius="sm" />
                <Skeleton height={10} width={"70%"} radius="sm" />
            </Box>
        </>
    );
}
