import { Flex, Box, Stack, Title, Text, Image } from "#mc";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import style from "./styles/style.module.css";
import AboutSkeleton from "#components/skeletons/About";
import { useGetUserQuery } from "#api/user";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();
    let user = {};
    let { data, isSuccess,isLoading } = useGetUserQuery();
    if (isSuccess) user = data.user;
    if (isLoading) return <AboutSkeleton />;
    return (
        <>
            <Title mb="xl">{t("biography")}</Title>
            <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "center", md: "flex-start" }}
            >
                <Text>{t("bio", { ns: "owner" })}</Text>
            </Flex>
        </>
    );
}
