import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);