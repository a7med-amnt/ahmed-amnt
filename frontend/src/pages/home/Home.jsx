import { Flex, Stack, Title, Text, Image } from "#mc";
import { useGetProfileQuery } from "#api/user";
export default function () {
    let user = {};
    let { data, isSuccess } = useGetProfileQuery();
    if (isSuccess) user = data.user;
    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                jsutify="center"
            >
                <Image src={"/imgs/developer-pic-1.png"} />
                <Stack>
                    <Title>{user.shortBio}</Title>
                    <Text>{user.preview}</Text>
                </Stack>
            </Flex>
        </>
    );
}
