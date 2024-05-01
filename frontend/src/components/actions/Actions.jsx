import { Group, useMantineColorScheme, ActionIcon } from "#mc";
import { useTheme } from "#hooks/theme";
import { useLangs } from "#hooks/langs";
import { useTranslation } from "#ri18n";
import { IconLanguage } from "#ti";

export default function () {
    const { toggleTheme, ToggleThemeIcon } = useTheme();
    const { toggleLang } = useLangs();
    let ModBtn = (
        <ActionIcon onClick={toggleTheme}><ToggleThemeIcon /></ActionIcon>
    );
    return (
        <Group>
            <ActionIcon onClick={toggleLang}>
                <IconLanguage />
            </ActionIcon>
            {ModBtn}
        </Group>
    );
}
