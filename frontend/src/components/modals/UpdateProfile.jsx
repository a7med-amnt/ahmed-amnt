import { Modal, TextInput, FileButton, Button, Space, Textarea } from "#mc";
import { useDisclosure } from "#mh";
import { useForm } from "#mf";
import { useGetProfileQuery, useUpdateProfileMutation } from "#api/user";

export default function ({ isOpened, close }) {
    const { data, isSuccess } = useGetProfileQuery();
    const [updateProfile] = useUpdateProfileMutation();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            name: "",
            shortBio: "",
            bio: ""
        }
    });
    
    if (isSuccess) form.initialize(data.user);

    function handleUpdateProfile() {
        updateProfile(form.getValues());
    }
    return (
        <Modal opened={isOpened} onClose={close} title="Update Profile">
            <TextInput
                {...form.getInputProps("name")}
                label="Name"
                placeholder="Enter here"
            />
            <Space h="sm" />
            <TextInput
                label="Short Bio"
                placeholder="Enter here"
                {...form.getInputProps("shortBio")}
            />
            <Space h="sm" />
            <Textarea
                autosize
                minRows={5}
                maxRows={10}
                label="Bio"
                placeholder="Enter here"
                {...form.getInputProps("bio")}
            />
            <Space h="xl" />
            <Button onClick={handleUpdateProfile} fullWidth>
                Add
            </Button>
        </Modal>
    );
}
