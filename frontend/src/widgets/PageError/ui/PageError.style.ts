import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../../app/providers/theme/theme";


export const PageErrorWrapper = styled(Box)(() => ({
    textAlign: "center",
    marginTop: "50px",
}))

export const TextError = styled(Typography)(() => ({
    '&&': {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "24px",
    }
}))

export const ReloadButton = styled(Button)(() => ({
    '&&': {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
        marginTop: "15px",
    }
}))