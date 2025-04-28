import { Avatar, Box, Button, Card } from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
import {
  CountryBlock,
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
    <Card
      variant="outlined"
      sx={{
        marginTop: "16px",
        backgroundColor: "#FAFAFA",
        maxWidth: "536px",
      }}
    >
      <CustomCardContent
        sx={{
          "&&": { paddingBottom: "16px" },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
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
          </Box>
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
    </Card>
  );
};
