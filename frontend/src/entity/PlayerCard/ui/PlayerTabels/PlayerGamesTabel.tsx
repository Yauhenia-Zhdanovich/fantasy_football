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

export const PlayerGamesTabel: FC = () => {
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
              maxWidth: "440px",
            }}
          >
            <CustomTabelCell>Appearence</CustomTabelCell>
            <CustomTabelCell align="left">Position</CustomTabelCell>
            <CustomTabelCell align="left">Rating</CustomTabelCell>
            <CustomTabelCell align="left">Captain</CustomTabelCell>
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
              {playerMockData.games.appearances}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.games.position}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.games.rating}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.games.captain ? "Yes" : "No"}
            </CustomTabelCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
