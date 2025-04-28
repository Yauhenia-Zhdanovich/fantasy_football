import { Skeleton } from "@mui/material";
import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router";
import {
  type AppRoutesProps,
  routeConfig,
} from "../../../../shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<Skeleton>{route.element}</Skeleton>}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
