import { Box, TableCell, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../../app/providers/theme/theme";

export const IconBlock = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const SecondaryText = styled(Typography)(() => ({
  "&&": {
    color: theme.palette.text.secondary,
    fontSize: "14px",
  },
}));

export const MainText = styled(Typography)(() => ({
  "&&": {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const LeagueBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "13px",
  backgroundColor: "#EEEEEE",
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CardWrapper = styled(Box)(() => ({
  padding: "16px",
  backgroundColor: "#FAFAFA",
  width: "536px",
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #E0E0E0",
  borderRadius: "4px",
}));

export const PrimaryText = styled(Typography)(() => ({
  "&&": {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#0B79D0",
  },
}));

export const VenueBlockWrapper = styled(Box)(() => ({
  borderTop: "1px solid #E0E0E0",
  marginTop: "16px",
  paddingTop: "16px",
  paddingBottom: "16px",
}));

export const CustomTabelCell = styled(TableCell)(() => ({
  "&&": {
    padding: "6px 16px",
    fontSize: "14px",
    lineHeight: "24px",
  },
}));

export const TeamBlockWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
