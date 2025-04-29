import { Box, ButtonGroup } from "@mui/material";
import { type FC, useState } from "react";
import { PlayerCard } from "../../../entity/PlayerCard";
import { TeamCardsList } from "../../../entity/TeamCard";
import { TeamCardStatistics } from "../../../entity/TeamCard";
import { yearDropdownLabels } from "../../../shared/consts/dropdownLabels";
import { filteringYears } from "../../../shared/consts/filteringYears";
import { CustomDropdownMenu } from "../../../shared/ui/CustomDropdownMenu/CustomDropdownMenu";
import { SwitchButton } from "./StatisticsPage.style";

const StatisticsPage: FC = () => {
  const [teamsActive, setTeamsActive] = useState(true);
  const [playersActive, setPlayersActive] = useState(false);

  const onTeams = () => {
    setPlayersActive(false);
    setTeamsActive(true);
  };

  const onPlayers = () => {
    setTeamsActive(false);
    setPlayersActive(true);
  };

  return (
    <>
      <ButtonGroup sx={{ marginTop: "31px" }}>
        <SwitchButton
          isActive={teamsActive}
          onClick={onTeams}
          variant="outlined"
        >
          TEAMS
        </SwitchButton>
        <SwitchButton
          onClick={onPlayers}
          variant="outlined"
          isActive={playersActive}
        >
          PLAYERS
        </SwitchButton>
      </ButtonGroup>
      <Box sx={{ marginTop: "24px" }}>
        <CustomDropdownMenu
          width="220px"
          Labels={yearDropdownLabels}
          filteringValues={filteringYears}
        />
      </Box>
      <TeamCardStatistics />
      <PlayerCard />
      <TeamCardsList />
    </>
  );
};

export default StatisticsPage;
