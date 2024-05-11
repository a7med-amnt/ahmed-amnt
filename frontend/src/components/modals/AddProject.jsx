import { Modal, TextInput, FileButton, Button, Space } from "#mc";
import { useDisclosure } from "#mh";
import { useForm } from "#mf";
import { useAddProjectMutation } from "#api/project";

export default function ({ isOpened, close }) {
    const [addProject] = useAddProjectMutation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            title: "",
            description: "",
            type: "",
            img: ""
        }
    });

    function handleAddProject() {
        let formData = new FormData();
        if (form.getValues().img) formData.append("img", form.getValues().img);
        formData.append("title", form.getValues().title);
        formData.append("description", form.getValues().description);
        formData.append("type", form.getValues().type);
        addProject(formData);
    }
    return (
        <Modal opened={isOpened} onClose={close} title="Add Project">
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
            <Button onClick={handleAddProject} fullWidth>
                Add
            </Button>
        </Modal>
    );
}
