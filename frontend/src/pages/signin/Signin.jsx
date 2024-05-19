import { Center, Stack, Title, TextInput, PasswordInput, Button } from "#mc";
import { useSigninMutation } from "#api/auth";
import { handleRes } from "#utils/api";
import { saveTokenHandler } from "#utils/token";
import { useForm } from "@mantine/form";
import { useTranslation } from "#ri18n";

export default function () {
    const { t } = useTranslation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: { secretWord: "", password: "" }
    });
    const [signin] = useSigninMutation();
    return (
        <>
            <Center>
                <Stack>
                    <Title>{t("signin")}</Title>
                    <TextInput
                        label={t("secretWord")}
                        placeholder={t("enterHere")}
                        {...form.getInputProps("secretWord")}
                    />
                    <PasswordInput
                        label={t("passwerd")}
                        placeholder={t("enterHere")}
                        {...form.getInputProps("password")}
                    />
                    <Button
                        onClick={() =>
                            handleRes(
                                signin,
                                form.getValues(),
                                null,
                                saveTokenHandler
                            )
                        }
                    >
                        {t("signin")}
                    </Button>
                </Stack>
            </Center>
        </>
    );
}
