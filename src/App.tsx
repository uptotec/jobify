import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home-page/home-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { FindAJobPage } from "./pages/find-a-job-page/find-a-job-page";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/jobs",
        Component: FindAJobPage,
    },
]);

function App() {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    return <RouterProvider router={router} />;
}

export default App;
