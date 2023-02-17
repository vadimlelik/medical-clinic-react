import { RouteProps } from "react-router-dom";
import About from "../../Pages/About/About";
import Login from "../../Pages/Login/LoginForm";
import Main from "../../Pages/Main/Main";
import NotFound from "../../Pages/NotFound/NotFound";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOTFOUND = "notFound",
    LOGIN = "login",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.LOGIN]: "/login/:type?",
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOTFOUND]: "*",
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <Login />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notFound,
        element: <NotFound />,
    },
};
