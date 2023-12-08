import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { FindAJobPage } from "./pages/find-a-job-page/find-a-job-page";
import { JobPage } from "./pages/job-page/job-page";
import { LoginPage } from "./pages/login-page/login-page";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/jobs",
        Component: FindAJobPage,
    },
    {
        path: "/job",
        Component: JobPage,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
]);

function App() {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    return <RouterProvider router={router} />;
}

export default App;
