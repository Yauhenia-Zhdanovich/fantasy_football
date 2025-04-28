<<<<<<< HEAD
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
=======
import { useCallback, Suspense } from "react";
import { Route, Routes } from "react-router"
import { AppRoutesProps, routeConfig } from "../../../../shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";
import { Skeleton } from "@mui/material";


export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={
                    <Skeleton>
                        {route.element}
                    </Skeleton>
            }>
                {route.element}
            </Suspense>
        )   
        return (
            <Route
                key={route.path}
                path={route.path}
                element={ route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
                
        </Routes>
    );
};
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
