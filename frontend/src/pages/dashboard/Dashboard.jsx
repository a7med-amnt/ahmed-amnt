import { Stack, Group, Title, ActionIcon } from "#mc";
import { useDisclosure } from "#mh";
import { IconPlus, IconEdit } from "#ti";
import UpdateProfile from "#components/modals/UpdateProfile";
import AddProject from "#components/modals/AddProject";
import UpdateProject from "#components/modals/UpdateProject";
import ProjectsCards from "#components/cards/ProjectsCards";

export default function () {
    const [
        isUpdateProfileModalOpened,
        { open: openUpdateProfileModal, close: closeUpdateProfileModal }
    ] = useDisclosure(false);
    const [
        isAddProjectModalOpened,
        { open: openAddProjectModal, close: closeAddProfileModal }
    ] = useDisclosure(false);
   
    return (
        <>
            <Stack my="xl">
                <Group rowgap="md">
                    <Title order={4}>Profile</Title>
                    <ActionIcon onClick={openUpdateProfileModal}>
                        <IconEdit />
                    </ActionIcon>
                </Group>
                <Stack></Stack>
            </Stack>
            <Stack my="xl">
                <Group rowgap="md">
                    <Title order={4}>Projects</Title>
                    <ActionIcon onClick={openAddProjectModal}>
                        <IconPlus />
                    </ActionIcon>
                </Group>
                <Stack>
                    <ProjectsCards />
                </Stack>
            </Stack>
            <UpdateProfile
                isOpened={isUpdateProfileModalOpened}
                close={closeUpdateProfileModal}
            />
            <AddProject
                isOpened={isAddProjectModalOpened}
                close={closeAddProfileModal}
            />
            
        </>
    );
}
