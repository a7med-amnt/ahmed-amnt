import { Flex, Stack, Title, Text, Image } from "#mc";
import { useGetUserQuery } from "#api/user";
import { useTranslation } from "#ri18n";
import HomeSkeleton from "#components/skeletons/Home";

export default function () {
    const { t, i18n } = useTranslation();
    let user = {};
    let { data, isSuccess, isLoading } = useGetUserQuery();
    if (isSuccess) {
        user = data.user;
    }
    return (
        <>
            <Flex
                direction={{ base: "column", sm: "row" }}
                align="center"
                justify="center"
            >
                {isLoading ? (
                    <HomeSkeleton />
                ) : (
                    <>
                        <Image w={{base:"100%",sm:"40%"}} src={"/imgs/developer-pic-1.png"} />
                        <Stack>
                            <Title>{t("article", { ns: "owner" })}</Title>
                            <Text>{t("overview", { ns: "owner" })}</Text>
                        </Stack>
                    </>
                )}
            </Flex>
        </>
    );
}
