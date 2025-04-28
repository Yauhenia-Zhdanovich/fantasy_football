import { Button } from "@mui/material";
import styled from "styled-components";

interface SwitchButtonProps {
<<<<<<< HEAD
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
=======
    isActive: boolean
}

export const SwitchButton = styled(Button)<SwitchButtonProps>(({isActive }) => ({
    fontSize: '13px',
    height: '30px',
    width: '109px',
    fontWeight: 500,
    lineHeight: '22px',
    '&&': {
    backgroundColor: isActive ? '#2196F380' : 'transparent',
  },
  }));
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
