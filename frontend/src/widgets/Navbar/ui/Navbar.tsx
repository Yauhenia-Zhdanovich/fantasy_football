import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Box, Button, Typography } from "@mui/material";
import { type FC, memo, useState } from "react";
import { Link } from "react-router";
import { RoutePaths } from "../../../shared/config/routeConfig/routeConfig";
import { Header, NavItem, Navigation } from "./Navbar.style";

export const Navbar: FC = memo(() => {
  const [statisticPage, setStatisticPage] = useState(true);
  const [teamPage, setTeamPage] = useState(false);

  const showTeamPage = () => {
    setStatisticPage(false);
    setTeamPage(true);
  };

  const showStatPage = () => {
    setTeamPage(false);
    setStatisticPage(true);
  };

  return (
    <>
      <Header>
        <Typography component={"h1"}>Fantasy league</Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          LOGOUT
          <ExitToAppOutlinedIcon
            sx={{
              width: "15px",
              height: "15px",
              marginLeft: "8px",
            }}
          />
        </Button>
      </Header>
      <Navigation>
        <NavItem onClick={showStatPage} isActive={statisticPage}>
          <Link
            to={RoutePaths.statistics}
            style={{
              all: "unset",
            }}
          >
            STATISTICS
          </Link>
        </NavItem>
        <NavItem onClick={showTeamPage} isActive={teamPage}>
          <Link
            to={RoutePaths.fantasy_teams}
            style={{
              all: "unset",
            }}
          >
            FANTASY TEAMS
          </Link>
        </NavItem>
      </Navigation>
    </>
  );
});
