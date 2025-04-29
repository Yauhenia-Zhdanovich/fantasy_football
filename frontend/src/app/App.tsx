import { Box } from "@mui/material";
import { Navbar } from "../widgets/Navbar";
import { AppRouter } from "./providers/router";

function App() {
  return (
    <>
      <Navbar />
      <Box
        component={"section"}
        sx={{
          padding: "0 180px",
        }}
      >
        <AppRouter />
      </Box>
    </>
  );
}

export default App;
