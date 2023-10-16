import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/404/NotFound";
import HeaderLayout from "./layouts/HeaderLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<HeaderLayout />}>
                <Route index element={<Home />} />
                <Route path="/sobrenos" element={<About />} />
            </Route>


            <Route path="*" element={<NotFound />} />
        </Route>

    )
)

export default router