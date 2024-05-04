import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/Main";
import Home from "#pages/home/Home";
import About from "#pages/about/About";
import Projects from "#pages/projects/Projects";

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
                    path: "about",
                    element: <About />
                },
                {
                    path: "projects",
                    element: <Projects />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
