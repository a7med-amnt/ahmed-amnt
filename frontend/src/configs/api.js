import { apiv1Url } from "#constants/api";

export const fetchBaseQueryConfig = {
    baseUrl: apiv1Url,
    prepareHeaders: headers => {
        const token = localStorage.getItem("token");

        if (token) {
            headers.set("authorization", token);
        }

        return headers;
    }
};
