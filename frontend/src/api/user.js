import api from "#api/api";

const userApi = api.injectEndpoints({
    endpoints: b => ({
        updateProfile: b.mutation({
            query: body => ({
                url: "/user",
                body,
                method: "put"
            })
        }),
        getProfile: b.query({
            query: () => "/user"
        })
    })
});
export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;
