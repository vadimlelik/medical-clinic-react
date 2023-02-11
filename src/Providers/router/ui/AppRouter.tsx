import React from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../../../shared/config/routerConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => {
        return <Route path={path} element={element} key={path} />;
      })}
    </Routes>
  );
};

export default AppRouter;
