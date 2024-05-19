import api from "#api/api";
import i18n from "#i18n/i18n";

const userApi = api.injectEndpoints({
    endpoints: b => ({
        updateProfile: b.mutation({
            query: body => ({
                url: "/user",
                body,
                method: "put"
            }),
            invalidatesTags:["owner"]
        }),
        getProfile: b.query({
            query: () => "/user",
            transformResponse: res => {
                i18n.addResources("ar", "owner", res.user.langs.ar);
                i18n.addResources("en", "owner", res.user.langs.en);
                return res;
            },
            providesTags: ["owner"]
        })
    })
});
export default userApi
export const { useGetProfileQuery, useUpdateProfileMutation } = userApi;
