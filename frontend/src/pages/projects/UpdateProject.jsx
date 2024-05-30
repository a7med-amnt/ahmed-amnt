import { useParams } from "#rrd";
import {
    Box,
    AspectRatio,
    Tabs,
    Image,
    TextInput,
    FileButton,
    Button,
    Group,
    Space
} from "#mc";
import { useForm } from "#mf";
import {
    useUpdateProjectMutation,
    useGetProjectQuery,
    useDeleteProjectMutation
} from "#api/project";
import { useTranslation } from "#ri18n";
import { handleProjectImg } from "#utils/ele";

export default function () {
    const { projectId } = useParams();

    const { t, i18n } = useTranslation();
    let arT = i18n.getFixedT("ar");
    let enT = i18n.getFixedT("en");
    const [updateProject, result] = useUpdateProjectMutation();
    const [deleteProject] = useDeleteProjectMutation();
    const { data, isSuccess, error } = useGetProjectQuery(projectId);

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
    if (isSuccess) {
        let project = {
            githubUrl: data.project.githubUrl,
            websiteUrl: data.project.websiteUrl,
            img: data.project.img,
            langs: {
                ar: {
                    title: data.project.langs.ar.title,
                    description: data.project.langs.ar.description
                },
                en: {
                    title: data.project.langs.en.title,
                    description: data.project.langs.en.description
                }
            }
        };
        form.initialize(project);
    }

    function handleUpdateProject() {
        // let formData = new FormData();
        // if (form.getValues().img) formData.append("img", form.getValues().img);
        // formData.append("langs", JSON.stringify(form.getValues().langs));
        // formData.append("websiteUrl", form.getValues().websiteUrl);
        // formData.append("githubUrl", form.getValues().githubUrl);
        updateProject({ data: form.getValues(), projectId });
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
            <TextInput
                label={t("imgUrl")}
                placeholder={t("enterHere")}
                {...form.getInputProps("imgUrl")}
            />
            <Space h="sm" />
            <AspectRatio ratio={16 / 9}>
                <Image id="upImg" src={handleProjectImg(data?.project.img)} />
            </AspectRatio>
            <Space h="sm" />
            <Group>
                <Button
                    onClick={() => {
                        deleteProject(projectId);
                    }}
                    color="red"
                >
                    {t("delete")}
                </Button>
            </Group>
            <Space h="xl" />
            <Button onClick={handleUpdateProject} fullWidth>
                {t("update")}
            </Button>
        </Box>
    );
}
