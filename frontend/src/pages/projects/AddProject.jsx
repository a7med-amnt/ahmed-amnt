import { Box, TextInput, FileButton, Button, Space } from "#mc";
import { useDisclosure } from "#mh";
import { useForm } from "#mf";
import { useAddProjectMutation } from "#api/project";

export default function () {
    const [addProject] = useAddProjectMutation();

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

    function handleAddProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("title", form.getValues().title);
        formData.append("description", form.getValues().description);
        formData.append("websiteUrl", form.getValues().websiteUrl);
        formData.append("githubUrl", form.getValues().githubUrl);
        addProject(formData);
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
            <Button onClick={handleAddProject} fullWidth>
                Add
            </Button>
        </Box>
    );
}
