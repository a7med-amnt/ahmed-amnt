import { useMantineColorScheme } from "#mc";
import { IconMoon, IconSun } from "#ti";

export  function useTheme() {
    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    function toggleTheme() {
        toggleColorScheme();
    }
    let ToggleThemeIcon = colorScheme == "dark" ? IconSun  : IconMoon ;
    return {
        toggleTheme,
        ToggleThemeIcon
    };
};
