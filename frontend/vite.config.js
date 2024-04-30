import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envPrefix:"E_",
    resolve: {
        alias: {
            //---react
            "#r": "react",
            "#rrd": "react-router-dom",
            //---i18next
            "#ri18n": "react-i18next",
            //---mantien
            "#mc": "@mantine/core",
            "#mh": "@mantine/hooks",
            "#mf": "@mantine/form",
            "#mn": "@mantine/notifications",
            //---tabler-icon
            "#ti": "@tabler/icons-react",
            //---folders
            "#pages": path.resolve(__dirname, "src", "pages"),
            "#styles": path.resolve(__dirname, "src", "styles"),
            "#app": path.resolve(__dirname, "src", "app"),
            "#layouts": path.resolve(__dirname, "src", "layouts"),
            "#routes": path.resolve(__dirname, "src", "routes"),
            "#components": path.resolve(__dirname, "src", "components"),
            "#i18n": path.resolve(__dirname, "src", "i18n"),
            "#configs": path.resolve(__dirname, "src", "configs"),
            "#utils": path.resolve(__dirname, "src", "utils"),
            "#constants": path.resolve(__dirname, "src", "constants"),
            "#api": path.resolve(__dirname, "src", "api")
        }
    }
});
