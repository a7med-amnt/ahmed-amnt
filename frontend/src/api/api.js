import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryConfig } from "#configs/api.js";

export default createApi({
    baseQuery: fetchBaseQuery(fetchBaseQueryConfig),
    endpoints: () => ({}),
    tagTypes: ["owner","projects","project"]
});
