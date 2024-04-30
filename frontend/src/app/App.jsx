import Router from "#routes/Router";
import { MantineProvider, DirectionProvider } from "#mc";
import { Notifications } from "#mn";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import api  from "#api/api";
import "#i18n/i18n";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "#styles/main.css";

export default function () {
    return (
        <ApiProvider api={api}>
            <DirectionProvider>
                <MantineProvider>
                    <Notifications position="top-center" limit={1} />
                    <Router />
                </MantineProvider>
            </DirectionProvider>
        </ApiProvider>
    );
}
