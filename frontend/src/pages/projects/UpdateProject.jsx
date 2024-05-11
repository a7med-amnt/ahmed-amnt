import { Box, TextInput, FileButton, Button, Space } from "#mc";
import { useParams } from "#rrd";
import { useForm } from "#mf";
import { useGetProjectQuery, useUpdateProjectMutation } from "#api/project";

export default function () {
    const { projectId } = useParams();
    const { data, isSuccess } = useGetProjectQuery(projectId);
    const [updateProject] = useUpdateProjectMutation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            description: "",
            img: "",
            githubUrl: "",
            websiteUrl: ""
        }
    });
    if (isSuccess) form.initialize(data.project);

    function handleUpdateProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("title", form.getValues().title);
        formData.append("description", form.getValues().description);
        formData.append("websiteUrl", form.getValues().websiteUrl);
        formData.append("githubUrl", form.getValues().githubUrl);
        updateProject({ data: formData, projectId });
    }
    return (
        <Box>
            <TextInput
                label="Title"
                placeholder="Enter here"
                {...form.getInputProps("title")}
            />
            <Space h="sm" />
            <TextInput
                label="Description"
                placeholder="Enter here"
                {...form.getInputProps("description")}
            />
            <Space h="sm" />
                 <TextInput
                label="Website URL"
                placeholder="Enter here"
                {...form.getInputProps("websiteUrl")}
            />
            <Space h="sm" />
            <TextInput
                label="github URL"
                placeholder="Enter here"
                {...form.getInputProps("githubUrl")}
            />
            <Space h="sm" />
            <FileButton {...form.getInputProps("img")}>
                {props => <Button {...props}>select image</Button>}
            </FileButton>
            <Space h="xl" />
            <Button onClick={handleUpdateProject} fullWidth>
                Update
            </Button>
        </Box>
    );
}
