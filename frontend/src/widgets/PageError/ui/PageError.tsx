import { Box, Button } from "@mui/material";
<<<<<<< HEAD
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
=======


export const PageError = () => {
    const reloadPage = () => {
        location.reload()
    }
    return (
        <Box 
            sx={{
                textAlign: 'center',
                marginTop: '50px',
            }}
        >
            <Box component={'h2'} sx={{
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '24px',
                fontFamily: "'Roboto', serif"
            }}>
                Something is going wrong <br/>
            </Box>
            <Button 
            variant="outlined"
            onClick={reloadPage}
            sx={{
                color: 'error.main',
                borderColor: 'error.main',
                marginTop: '15px'
            }}
            >Reload page</Button>
        </Box>
    );
};
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
