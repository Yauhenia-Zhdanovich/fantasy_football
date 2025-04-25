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