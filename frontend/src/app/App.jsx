import Router from "#routes/Router";
import { MantineProvider, DirectionProvider } from "#mc";
import { Notifications } from "#mn";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { theme } from "#configs/mc";
import api from "#api/api";
import { useLangs } from "#hooks/langs";
import "#i18n/i18n";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "#styles/main.css";

export default function () {
    const { autoSetDirLang } = useLangs();
    autoSetDirLang();
    return (
        <ApiProvider api={api}>
            <DirectionProvider>
                <MantineProvider theme={theme}>
                    <Notifications position="top-center" limit={1} />
                    <Router />
                </MantineProvider>
            </DirectionProvider>
        </ApiProvider>
    );
}
