import { Skeleton, Stack } from "#mc";
export default function () {
    return (
        <>
            <Skeleton
                style={{ alignSelf: "center" }}
                radius="md"
                height={350}
                width={200}
                mb="md"
            />
            <Stack w="100%" mx="md">
                <Skeleton width={150} mb="xl" height={25} radius="md" />
                <Skeleton height={10} width={"50%"} radius="md" />
                <Skeleton height={10} width={"90%"} radius="md" />
                <Skeleton height={10} width={"20%"} radius="md" />
                <Skeleton height={10} width={"50c"} radius="md" />
            </Stack>
        </>
    );
}
