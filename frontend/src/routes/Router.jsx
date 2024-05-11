import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/Main";
import Signin from "#pages/signin/Signin";
import Home from "#pages/home/Home";
import About from "#pages/about/About";
import Projects from "#pages/projects/Projects";
import Project from "#pages/projects/Project";
import Dashboard from "#pages/dashboard/Dashboard";
import UpdateProfile from "#pages/update-profile/UpdateProfile";
import AddProject from "#pages/projects/AddProject";
import UpdateProject from "#pages/projects/UpdateProject";

export default function () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/projects",
                    element: <Projects />
                },
                {
                    path: "/dashboard",
                    element: <Dashboard />
                },
                {
                    path: "/update-profile",
                    element: <UpdateProfile />
                },
                {
                    path: "/projects/:projectId",
                    element: <Project />
                },
                {
                    path: "/add-project",
                    element: <AddProject />
                },
                {
                    path: "/projects/update-project/:projectId",
                    element: <UpdateProject />
                },
                {
                    path: "/signin",
                    element: <Signin />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
