import { Avatar, Box, Card, CardContent, Grid } from "@mui/material";
import { playerMockData } from "../model/playerMockData";
import {
  CardHeader,
  CustomCard,
  IconBlock,
  LeagueBlock,
  MainText,
  PrimaryText,
  SecondaryText,
} from "./PlayerCard.style";
import { PlayerCardsTabel } from "./PlayerTabels/PlayerCardsTabel";
import { PlayerDuelsTabel } from "./PlayerTabels/PlayerDuelsTabel";
import { PlayerGamesTabel } from "./PlayerTabels/PlayerGamesTabel";
import { PlayerGoalsTabel } from "./PlayerTabels/PlayerGoalsTabel";
import { PlayerPassesTabel } from "./PlayerTabels/PlayerPassesTabel";
import { PlayerPenaltyTabel } from "./PlayerTabels/PlayerPenaltyTabel";
import type { FC } from "react";

export const PlayerCard: FC = () => {
  return (
    <CustomCard variant="outlined">
      <CardContent
        sx={{
          "&&": { paddingBottom: "16px" },
        }}
      >
        <CardHeader>
          <IconBlock>
            <Avatar
              src={playerMockData.player.photo}
              sx={{
                borderRadius: "4px",
              }}
            />
            <Box>
              <MainText>
                {playerMockData.player.name} <br />
              </MainText>
              <PrimaryText>Age: {playerMockData.player.age}</PrimaryText>
              <SecondaryText>
                Born: {playerMockData.player.birth} <br />
                Height: {playerMockData.player.height} <br />
                Weight: {playerMockData.player.weight}
              </SecondaryText>
            </Box>
          </IconBlock>
          <Box>
            <LeagueBlock>
              <Avatar
                sx={{ width: "18px", height: "18px", marginRight: "5px" }}
                src={playerMockData.team.logo}
              />
              {playerMockData.team.name}
            </LeagueBlock>
            <LeagueBlock sx={{ marginTop: "8px" }}>
              <Avatar
                sx={{ width: "18px", height: "18px", marginRight: "5px" }}
                src={playerMockData.league.logo}
              />
              {playerMockData.league.name}
            </LeagueBlock>
          </Box>
        </CardHeader>
        <Box>
          <Grid container columnSpacing={'16px'} rowSpacing={'8px'}>
            <Grid size={6}>
              <SecondaryText>Games</SecondaryText>
              <PlayerGamesTabel />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Goals</SecondaryText>
              <PlayerGoalsTabel />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Passes</SecondaryText>
              <PlayerPassesTabel />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Cards</SecondaryText>
              <PlayerCardsTabel />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Penalty</SecondaryText>
              <PlayerPenaltyTabel />
            </Grid>
            <Grid size={6}>
              <SecondaryText>Duels</SecondaryText>
              <PlayerDuelsTabel />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </CustomCard>
  );
};
