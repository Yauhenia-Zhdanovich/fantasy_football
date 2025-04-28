import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { teamMockedData } from "../../model/teamMockedData";
import { CustomTabelCell } from "./TeamCardStatistics.style";
import type { FC } from "react";

export const TeamStatistics: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead
          sx={{
            backgroundColor: "#FAFAFA",
          }}
        >
          <TableRow
            sx={{
              maxHeight: "36px",
            }}
          >
            <CustomTabelCell>Played games</CustomTabelCell>
            <CustomTabelCell align="left">Wins</CustomTabelCell>
            <CustomTabelCell align="left">Draws</CustomTabelCell>
            <CustomTabelCell align="left">Losess</CustomTabelCell>
            <CustomTabelCell align="left">Goals</CustomTabelCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              height: "36px",
            }}
          >
            <CustomTabelCell align="left">
              {teamMockedData.stats.played}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {teamMockedData.stats.wins}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {teamMockedData.stats.draws}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {teamMockedData.stats.loses}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {teamMockedData.stats.goals}
            </CustomTabelCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
