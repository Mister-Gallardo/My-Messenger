import { Box, Button, Typography } from "@mui/material";

function InstallApp() {

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          maxWidth: "310px",
        }}
      >
        <img width="250px" src="./src/images/chatIcon.svg"></img>
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: "28px",
            color: "rgb(230, 230, 230)",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Download the Windows app to improve the user experience
        </Typography>
        <a href="src/documents/app.txt" download>
          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              fontSize: "20px",
              padding: "3px 100px",
            }}
          >
            Install App
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default InstallApp;
