<<<<<<< HEAD
import { Box } from "@mui/material";
=======
import { Box} from "@mui/material";
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
import { Navbar } from "../widgets/Navbar";
import { AppRouter } from "./providers/router";

function App() {
<<<<<<< HEAD
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
=======

  return (
    <div className="app">
      <Navbar />
      <Box component={'section'} sx={{
        padding: '0 180px'
      }}>
        <AppRouter/>
      </Box>
    </div>
  )
}

export default App
>>>>>>> 6d89d5e6d5195afb7cb6975a9572e8d5741fdeb4
