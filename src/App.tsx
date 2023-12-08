import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { FindAJobPage } from "./pages/find-a-job-page/find-a-job-page";
import { JobPage } from "./pages/job-page/job-page";
import { LoginPage } from "./pages/login-page/login-page";
import { SignUpPage } from "./pages/sign-up-page/sign-up-page";

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
        path: "/job/:id",
        Component: JobPage,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/signup",
        Component: SignUpPage,
    },
]);

function App() {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    return <RouterProvider router={router} />;
}

export default App;
