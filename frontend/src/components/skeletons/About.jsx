import { Skeleton, Stack } from "#mc";
export default function () {
    return (
        <Stack>
            <Skeleton mb="xl" height={25} width={200} radius="md" />
            <Skeleton height={10} width={"50%"} radius="md" />
            <Skeleton height={10} width={"90%"} radius="md" />
            <Skeleton height={10} width={"20%"} radius="md" />
            <Skeleton height={10} width={"50c"} radius="md" />
            <Skeleton height={10} width={"20%"} radius="md" />
            <Skeleton height={10} width={"90%"} radius="md" />
            <Skeleton height={10} width={"50c"} radius="md" />
        </Stack>
    );
}
