import { Button } from "@mui/material";
import styled from "styled-components";

interface SwitchButtonProps {
  isActive: boolean;
}

export const SwitchButton = styled(Button)<SwitchButtonProps>(
  ({ isActive }) => ({
    fontSize: "13px",
    height: "30px",
    width: "109px",
    fontWeight: 500,
    lineHeight: "22px",
    "&&": {
      backgroundColor: isActive ? "#2196F380" : "transparent",
    },
  }),
);

