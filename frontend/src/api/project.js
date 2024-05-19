import api from "#api/api";
import i18n from "#i18n/i18n";

const projectApi = api.injectEndpoints({
    endpoints: b => ({
        addProject: b.mutation({
            query: body => ({
                url: "/projects",
                body,
                method: "post"
            }),
            invalidatesTags: ["projects"]
        }),
        getProject: b.query({
            query: projectId => "/projects/" + projectId,
            providesTags: ["project", "projects"],
            transformResponse: res => {
                i18n.addResources("ar", res.project._id, res.project.langs.ar);
                i18n.addResources("en", res.project._id, res.project.langs.en);
                return res;
            }
        }),
        getProjects: b.query({
            query: () => "/projects",
            providesTags: ["projects"],
            transformResponse: res => {
                res.projects.map(project => {
                    i18n.addResources(
                        "ar",
                        project._id,
                        project.langs.ar
                    );
                    i18n.addResources(
                        "en",
                        project._id,
                        project.langs.en
                    );
                });
                return res;
            }
        }),
        deleteProject: b.mutation({
            query: projectId => ({
                url: "/projects/" + projectId,
                method: "delete"
            }),
            invalidatesTags: ["projects"]
        }),

        updateProject: b.mutation({
            query: ({ data, projectId }) => ({
                url: "/projects/" + projectId,
                body: data,
                method: "put"
            }),
            invalidatesTags: ["project", "projects"]
        })
    })
});
export const {
    useAddProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
    useGetProjectQuery,
    useGetProjectsQuery
} = projectApi;
