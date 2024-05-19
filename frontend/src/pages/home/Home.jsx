import { Flex, Stack, Title, Text, Image } from "#mc";
import { useGetProfileQuery } from "#api/user";
import { useTranslation } from "#ri18n";

export default function () {
    const { t, i18n } = useTranslation();
    let user = {};
    let { data, isSuccess, error } = useGetProfileQuery();
    if (isSuccess) {
        user = data.user;
        
    }

    return (
        <>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                jsutify="center"
            >
                <Image src={"/imgs/developer-pic-1.png"} />
                <Stack>
                    <Title>{t("article", { ns: "owner" })}</Title>
                    <Text>{t("overview", { ns: "owner" })}</Text>
                </Stack>
            </Flex>
        </>
    );
}
