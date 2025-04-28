import { Box, Button } from "@mui/material";
import type { FC } from "react";

export const PageError: FC = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <Box
        component={"h2"}
        sx={{
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "24px",
          fontFamily: "'Roboto', serif",
        }}
      >
        Something is going wrong <br />
      </Box>
      <Button
        variant="outlined"
        onClick={reloadPage}
        sx={{
          color: "error.main",
          borderColor: "error.main",
          marginTop: "15px",
        }}
      >
        Reload page
      </Button>
    </Box>
  );
};
