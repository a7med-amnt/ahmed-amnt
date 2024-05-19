import { useRef } from "#r";
import {
    Box,
    AspectRatio,
    Tabs,
    Image,
    TextInput,
    FileButton,
    Button,
    Space
} from "#mc";
import { useDisclosure } from "#mh";
import { useForm } from "#mf";
import { useAddProjectMutation } from "#api/project";
import { useTranslation } from "#ri18n";

export default function () {
    let imgRef = useRef();
    const { t, i18n } = useTranslation();
    let arT = i18n.getFixedT("ar");
    let enT = i18n.getFixedT("en");
    const [addProject, result] = useAddProjectMutation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            img: "",
            githubUrl: "",
            websiteUrl: "",
            langs: {
                ar: {
                    title: "",
                    description: ""
                },
                en: {
                    title: "",
                    description: ""
                }
            }
        }
    });
    function handleAddProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("langs", JSON.stringify(form.getValues().langs));

        formData.append("websiteUrl", form.getValues().websiteUrl);
        formData.append("githubUrl", form.getValues().githubUrl);
        addProject(formData);
    }
    function handleImgChange(e) {
        form.getValues().img
            ? (imgRef.current.src = URL.createObjectURL(form.getValues().img))
            : imgRef.current.removeAttribute("src");
    }
    return (
        <Box>
            <Tabs defaultValue="ar">
                <Tabs.List>
                    <Tabs.Tab value="ar">العربية</Tabs.Tab>
                    <Tabs.Tab value="en">English</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel style={{ direction: "rtl" }} value="ar">
                    <TextInput
                        label={arT("title")}
                        placeholder={arT("enterHere")}
                        {...form.getInputProps("langs.ar.title")}
                    />
                    <Space h="sm" />
                    <TextInput
                        label={arT("description")}
                        placeholder={arT("enterHere")}
                        {...form.getInputProps("langs.ar.description")}
                    />
                    <Space h="sm" />
                </Tabs.Panel>
                <Tabs.Panel style={{ direction: "ltr" }} value="en">
                    <TextInput
                        label={enT("title")}
                        placeholder={enT("enterHere")}
                        {...form.getInputProps("langs.en.title")}
                    />
                    <Space h="sm" />
                    <TextInput
                        label={enT("description")}
                        placeholder={enT("enterHere")}
                        {...form.getInputProps("langs.en.description")}
                    />
                    <Space h="sm" />
                </Tabs.Panel>
            </Tabs>
            <TextInput
                label={t("websiteUrl")}
                placeholder={t("enterHere")}
                {...form.getInputProps("websiteUrl")}
            />
            <Space h="sm" />
            <TextInput
                label={t("githubUrl")}
                placeholder={t("enterHere")}
                {...form.getInputProps("githubUrl")}
            />
            <Space h="sm" />
            <AspectRatio ratio={16 / 9}>
                <Image ref={imgRef} />
            </AspectRatio>
            <Space h="sm" />
            <FileButton
                {...form.getInputProps("img")}
                onChange={e => {
                    form.getInputProps("img").onChange(e);
                    handleImgChange(e);
                }}
            >
                {props => <Button {...props}>{t("selectImg")}</Button>}
            </FileButton>
            <Space h="xl" />
            <Button onClick={handleAddProject} fullWidth>
                {t("add")}
            </Button>
        </Box>
    );
}
