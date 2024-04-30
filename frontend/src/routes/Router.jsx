import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/Main";
import Home from "#pages/Home";
import About from "#pages/About";

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
                    path:"about",
                    element: <About />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
