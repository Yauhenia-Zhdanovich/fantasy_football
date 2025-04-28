<<<<<<< HEAD
import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";
import { RoutePaths } from "../../../../shared/config/routeConfig/routeConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = /* useSelector(getUserAuthData) */ true;
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths["statistics"]}
        state={{ from: location }}
        replace
      />
    );
  }
  return children;
}
=======
import { JSX } from "react";
import { useLocation, Navigate } from "react-router";
import { RoutePaths } from "../../../../shared/config/routeConfig/routeConfig";


export function RequireAuth ({children}: {children: JSX.Element}) {
    const auth = /* useSelector(getUserAuthData) */ true;
    const location = useLocation()

    if(!auth) {
        return <Navigate to={RoutePaths['statistics']} state={{from: location}} replace/>
    }
    return children;
}
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
