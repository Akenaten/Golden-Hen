import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./routesConfig";
export default function Router() {
    const routes = createBrowserRouter(routesConfig);
    return <RouterProvider router={routes} />;
}
