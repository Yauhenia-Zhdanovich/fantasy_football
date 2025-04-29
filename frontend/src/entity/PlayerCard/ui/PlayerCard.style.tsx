import { Box, Card, TableCell, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../app/providers/theme/theme";

export const IconBlock = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const SecondaryText = styled(Typography)(() => ({
  '&&': {
    color: theme.palette.text.secondary,
    fontSize: "14px",
  }
}));

export const MainText = styled(Typography)(() => ({
  '&&': {
    fontSize: "16px",
    lineHeight: "24px",
  }
}));

export const PrimaryText = styled(Typography)(() => ({
  '&&': {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#0B79D0",
  }
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

export const CustomCard = styled(Card)(() => ({
  marginTop: "16px",
  backgroundColor: "#FAFAFA",
  maxWidth: "928px",
}))

export const CardHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between"
}))
