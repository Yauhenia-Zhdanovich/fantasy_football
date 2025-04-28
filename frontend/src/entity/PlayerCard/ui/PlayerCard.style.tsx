import { Box, TableCell } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../app/providers/theme/theme";

export const IconBlock = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const SecondaryText = styled(Box)(() => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
}));

export const MainText = styled(Box)(() => ({
  fontSize: "16px",
  lineHeight: "24px",
}));

export const PrimaryText = styled(Box)(() => ({
  fontSize: "14px",
  lineHeight: "20px",
  color: "#0B79D0",
}));

export const LeagueBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "13px",
  backgroundColor: "#EEEEEE",
  justifySelf: "end",
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CustomTabelCell = styled(TableCell)(() => ({
  "&&": {
    padding: "6px 16px",
    fontSize: "14px",
    lineHeight: "24px",
  },
}));
