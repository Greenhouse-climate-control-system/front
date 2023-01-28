import { Route } from "@tanstack/react-location";
import { HomePage } from "./home-page";
import { Routes } from "./types";

export const routes: Route[] = [
    {
        path: Routes.Home,
        element: <HomePage />,
    }
];