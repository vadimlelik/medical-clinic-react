import { RouteProps } from "react-router-dom";
import About from "../../Pages/About/About";
import Main from "../../Pages/Main/Main";
import NotFound from "../../Pages/NotFound/NotFound";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOTFOUND = "notFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: "/about",
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
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <NotFound />,
  },
};
