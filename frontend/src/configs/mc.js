import {
    createTheme,
    colorsTuple,
    ActionIcon,
    virtualColor
} from "@mantine/core";

export const theme = createTheme({
    components: {
        ActionIcon: ActionIcon.extend({
            defaultProps: {
                variant: "default",
                bg: "transparent",
                style: {
                    border: "0"
                }
            }
        })
    },
    primaryColor: "primary",
    colors: {
        primary: colorsTuple("#FFC0CB"),
        mDark: colorsTuple("#1b1b1b"),
        mLight: colorsTuple("#f5f5f5"),
        bg: virtualColor({
            name: "bg",
            light: "mLight",
            dark: "mDark"
        })
    },
    fontFamily: "'Marhey', sans-serif"
});
