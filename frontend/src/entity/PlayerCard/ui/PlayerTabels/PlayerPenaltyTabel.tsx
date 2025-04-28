import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { playerMockData } from "../../model/playerMockData";
import { CustomTabelCell } from "../PlayerCard.style";
import type { FC } from "react";

export const PlayerPenaltyTabel: FC = () => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "8px" }}>
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
            <CustomTabelCell>Won</CustomTabelCell>
            <CustomTabelCell align="left">Commited</CustomTabelCell>
            <CustomTabelCell align="left">Scored</CustomTabelCell>
            <CustomTabelCell align="left">Missed</CustomTabelCell>
            <CustomTabelCell align="left">Saved</CustomTabelCell>
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
              {playerMockData.penalty.won}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.penalty.committed}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.penalty.scored}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.penalty.missed}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.penalty.saved}
            </CustomTabelCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
