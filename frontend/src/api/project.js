import api from "#api/api";

const projectApi = api.injectEndpoints({
    endpoints: b => ({
        addProject: b.mutation({
            query: body => ({
                url: "/projects",
                body,
                method: "post"
            })
        }),
        getProject: b.query({
            query: projectId => "/projects/" + projectId
        }),
        getProjects: b.query({
            query: () => "/projects"
        }),
        deleteProject: b.mutation({
            query: projectId => ({
                url: "/projects/" + projectId,
                method: "delete"
            })
        }),

        updateProject: b.mutation({
            query: ({ data, projectId }) => ({
                url: "/projects/" + projectId,
                body: data,
                method: "put"
            })
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
