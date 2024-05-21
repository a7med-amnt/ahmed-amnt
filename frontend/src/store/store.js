import { configureStore } from "@reduxjs/toolkit";
import api from "#api/api";
import { notice } from "./middlewares/api";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: gdm => gdm().concat(api.middleware, notice)
});

export default store;
