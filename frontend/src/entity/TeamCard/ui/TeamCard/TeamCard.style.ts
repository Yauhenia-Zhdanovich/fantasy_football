import { Box, CardContent } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../../app/providers/theme/theme";

export const PrimaryText = styled(Box)(() => ({
  fontSize: "14px",
  lineHeight: "20px",
  color: "#0B79D0",
}));

export const SecondaryText = styled(Box)(() => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
}));

export const MainText = styled(Box)(() => ({
  fontSize: "14px",
  lineHeight: "21px",
  fontWeight: 500,
  color: "black",
}));

export const CountryBlock = styled(Box)(() => ({
  display: "flex",
  fontSize: "14px",
  backgroundColor: "#EEEEEE",
  borderRadius: "16px",
  padding: "0 8px",
  height: "fit-content",
  width: "fit-content",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
