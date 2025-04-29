import { Avatar, Box, Button, Card } from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
import {
  ContentWrapper,
  CountryBlock,
  CustomCard,
  CustomCardContent,
  MainText,
  PrimaryText,
} from "./TeamCard.style";
import type { FC } from "react";

interface TeamCardProps {
  number: number;
}

export const TeamCard: FC<TeamCardProps> = (props) => {
  const { number } = props;
  return (
    <CustomCard variant="outlined">
      <CustomCardContent
        sx={{
          "&&": { paddingBottom: "16px" },
        }}
      >
        <Box>
          <ContentWrapper>
            <MainText>
              {number}. {teamMockedData.team.name} F.C.
            </MainText>
            <CountryBlock>
              <Avatar
                sx={{ width: "18px", height: "18px", marginRight: "5px" }}
                src={teamMockedData.league.country.flag}
              />
              {teamMockedData.league.country.name}
            </CountryBlock>
          </ContentWrapper>
          <PrimaryText>
            Total points:{" "}
            {teamMockedData.stats.wins * 3 + teamMockedData.stats.draws}
          </PrimaryText>
        </Box>

        <Box>
          <Button
            sx={{
              marginRight: "4px",
            }}
          >
            <MainText>EDIT</MainText>
          </Button>
          <Button>
            <MainText>DELETE</MainText>
          </Button>
        </Box>
      </CustomCardContent>
    </CustomCard>
  );
};
