import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <Box sx={{ backgroundColor: "yellow", height: "50%" }}>
        <Box sx={{ width: "25vw", backgroundColor: "red" }}>5</Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(70, 70, 80)",
          marginTop: "auto",
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'center',
          height: "50px",
          padding: '0px 25px',
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: "14px",
            color: "white",
          }}
        >
          ©️󠀩 All rights reserved
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Edu AU VIC WA NT Hand, cursive',
            fontSize: "18px",
            color: "white",
            fontWeight: '500'
          }}
        >
          Mr. Gallardo
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
