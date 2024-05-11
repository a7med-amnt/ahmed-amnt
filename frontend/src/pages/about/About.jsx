import { Flex, Box, Stack, Title, Text, Image } from "#mc";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import style from "./styles/style.module.css";
import { useGetProfileQuery } from "#api/user";

export default function () {
    let user = {};
    let { data, isSuccess } = useGetProfileQuery();
    if (isSuccess) user = data.user;
    return (
        <>
            <Title mb="xl">Nothing</Title>
            <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "flex-start" }}
            >
                <Text>{user.bio}</Text>
            </Flex>
        </>
    );
}
