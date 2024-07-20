import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

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
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
