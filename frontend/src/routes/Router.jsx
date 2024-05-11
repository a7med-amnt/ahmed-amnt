import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/Main";
import Home from "#pages/home/Home";
import About from "#pages/about/About";
import Projects from "#pages/projects/Projects";
import AdminProject from "#pages/projects/AdminProject";
import Dashboard from "#pages/dashboard/Dashboard";
import Signin from "#pages/signin/Signin";

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
                    path: "/projects/:projectId",
                    element: <AdminProject />
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
