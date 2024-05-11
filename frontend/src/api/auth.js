import api from "#api/api";

const authApi = api.injectEndpoints({
    endpoints: b => ({
        signin: b.mutation({
            query: body => ({
                url: "/auth/signin",
                body,
                method: "post"
            })
        })
    })
});
export const { useSigninMutation } = authApi;
