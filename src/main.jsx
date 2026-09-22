import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //react router
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import EditPage from "./pages/EditPage.jsx";

//router logic changed with v6 -> v7 of react-router

//main page encapsulates route endpoints of pages for reference in Homepage.jsx 
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: HomePage },
            { path: "create", Component: CreatePage },
            { path: "edit/:id", Component: EditPage },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
