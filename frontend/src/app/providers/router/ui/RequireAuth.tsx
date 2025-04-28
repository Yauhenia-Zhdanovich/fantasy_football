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
