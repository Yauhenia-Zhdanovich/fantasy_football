import { Box } from "@mui/material";
import { Navbar } from "../widgets/Navbar";
import { AppRouter } from "./providers/router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Box
        component={"section"}
        sx={{
          padding: "0 180px",
        }}
      >
        <AppRouter />
      </Box>
    </div>
  );
}

export default App;
