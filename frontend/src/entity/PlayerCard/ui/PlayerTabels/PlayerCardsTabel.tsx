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

export const PlayerCardsTabel: FC = () => {
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
            <CustomTabelCell>Yellow</CustomTabelCell>
            <CustomTabelCell align="left">Yellow-Red</CustomTabelCell>
            <CustomTabelCell align="left">Red</CustomTabelCell>
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
              {playerMockData.cards.yellow}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.cards.yellowred}
            </CustomTabelCell>
            <CustomTabelCell align="left">
              {playerMockData.cards.red}
            </CustomTabelCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
