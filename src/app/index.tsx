import { ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "@/pages";

const reactLocation = new ReactLocation();

export const App = () => (
        <Router location={reactLocation} routes={routes} />
);
