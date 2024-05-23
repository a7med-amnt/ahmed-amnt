import { createBrowserRouter, RouterProvider } from "#rrd";
import { dashboardLoader,baseLoader } from "./loaders";
import Main from "#layouts/Main";
import Signin from "#pages/signin/Signin";
import Home from "#pages/home/Home";
import About from "#pages/about/About";
import Projects from "#pages/projects/Projects";
import Project from "#pages/projects/Project";
import AdminProjects from "#pages/projects/AdminProjects";
import Dashboard from "#pages/dashboard/Dashboard";
import UpdateProfile from "#pages/update-profile/UpdateProfile";
import AddProject from "#pages/projects/AddProject";
import UpdateProject from "#pages/projects/UpdateProject";

export default function () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            loader: baseLoader,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "projects",
                    element: <Projects />
                },
                {
                    path: "projects/:projectId",
                    element: <Project />
                },
                {
                    path: "dashboard",
                    element: <Dashboard />,
                    loader: dashboardLoader,
                    children: [
                        {
                            path: "update-profile",
                            element: <UpdateProfile />
                        },
                        {
                            path: "add-project",
                            element: <AddProject />
                        },
                        {
                            path: "projects/update-project/:projectId",
                            element: <UpdateProject />
                        },
                        {
                            path: "projects",
                            element: <AdminProjects />
                        }
                    ]
                },
                {
                    path: "signin",
                    element: <Signin />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
