import { Modal, TextInput, FileButton, Button, Space } from "#mc";
import { useDisclosure } from "#mh";
import { useForm } from "#mf";
import { useGetProjectQuery, useUpdateProjectMutation } from "#api/project";

export default function ({ isOpened, close, projectId }) {
    const { data, isSuccess } = useGetProjectQuery(projectId);
    const [updateProject] = useUpdateProjectMutation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            description: "",
            type: "",
            img:""
        }
    });
    if (isSuccess) form.initialize(data.project);

    function handleUpdateProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("title", form.getValues().title);
        formData.append("description", form.getValues().description);
        formData.append("type", form.getValues().type);
        updateProject({ data: formData, projectId });
    }
    return (
        <Modal opened={isOpened} onClose={close} title="Update Project">
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
                label="Type"
                placeholder="Enter here"
                {...form.getInputProps("type")}
            />
            <Space h="sm" />
            <FileButton {...form.getInputProps("img")}>
                {props => <Button {...props}>select image</Button>}
            </FileButton>
            <Space h="xl" />
            <Button onClick={handleUpdateProject} fullWidth>
                Update
            </Button>
        </Modal>
    );
}
