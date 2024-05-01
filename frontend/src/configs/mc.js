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
        bg: virtualColor({
            name: "primary",
            light: "#000",
            dark: "#fff"
        })
    }
});
