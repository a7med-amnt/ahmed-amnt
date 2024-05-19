import { useRef } from "#r";
import { useParams } from "#rrd";
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
import { useForm } from "#mf";
import { useUpdateProjectMutation, useGetProjectQuery } from "#api/project";
import { useTranslation } from "#ri18n";
import { handleProjectImg } from "#utils/ele";

export default function () {
    let imgRef = useRef();
    let imgEle = document.getElementById("upImg");
    const { projectId } = useParams();

    const { t, i18n } = useTranslation();
    let arT = i18n.getFixedT("ar");
    let enT = i18n.getFixedT("en");
    const [updateProject, result] = useUpdateProjectMutation();
    const { data, isSuccess, error } = useGetProjectQuery(projectId);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            img: null,
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
            img: null,
            githubUrl: data.project.githubUrl,
            websiteUrl: data.project.websiteUrl,
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
    if (!form.getValues().img) {
        if (data?.project.img) {
            imgEle?.setAttribute("src", handleProjectImg(data.project.img));
        }
    }
    console.log(imgEle);
    function handleUpdateProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("langs", JSON.stringify(form.getValues().langs));

        formData.append("websiteUrl", form.getValues().websiteUrl);
        formData.append("githubUrl", form.getValues().githubUrl);
        updateProject({ data: formData, projectId });
    }

    function handleImgChange(e) {
        form.getValues().img
            ? (imgRef.current.src = URL.createObjectURL(form.getValues().img))
            : imgEle.setAttribute("src", handleProjectImg(data.project.img));
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
                <Image id="upImg" ref={imgRef} />
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
            <Button onClick={handleUpdateProject} fullWidth>
                {t("update")}
            </Button>
        </Box>
    );
}
