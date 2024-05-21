import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryConfig } from "#configs/api.js";

export default createApi({
  reducerPath: "api",
    baseQuery: fetchBaseQuery(fetchBaseQueryConfig),
    endpoints: () => ({}),
    tagTypes: ["owner","projects","project"]
});
