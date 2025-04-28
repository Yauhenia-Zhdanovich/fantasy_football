import type { RouteProps } from "react-router";
import { StatisticsPage } from "../../../pages/statisticsPage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  STATISTICS = "statistics",
  FANTASY_TEAMS = "fantasy_teams",

  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.STATISTICS]: "/",
  [AppRoutes.FANTASY_TEAMS]: "/fantasy_team",
  [AppRoutes.NOT_FOUND]: "/not_found",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.STATISTICS]: {
    path: `${RoutePaths.statistics}`,
    element: <StatisticsPage />,
  },
  [AppRoutes.FANTASY_TEAMS]: {
    path: `${RoutePaths.fantasy_teams}`,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: `${RoutePaths.not_found}`,
  },
};
