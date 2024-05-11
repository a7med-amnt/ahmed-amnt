import { Center, Stack, Title, TextInput, PasswordInput, Button } from "#mc";
import { useSigninMutation } from "#api/auth";
import { handleRes } from "#utils/api";
import { saveTokenHandler } from "#utils/token";
import { useForm } from "@mantine/form";

export default function () {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: { secretWord: "", password: "" }
    });
    const [signin] = useSigninMutation();
    return (
        <>
            <Center>
                <Stack>
                    <Title>Signin</Title>
                    <TextInput
                        label="Secret Word"
                        placeholder="ahmed"
                        {...form.getInputProps("secretWord")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="•••a"
                        {...form.getInputProps("password")}
                    />
                    <Button onClick={() => handleRes(signin, form.getValues(),null,saveTokenHandler)}>
                        Signin
                    </Button>
                </Stack>
            </Center>
        </>
    );
}
