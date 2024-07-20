import { Box, Button, Typography } from "@mui/material";

function Main() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        backgroundColor: "rgb(65, 65, 70)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "380px",
          borderRight: "1px solid white",
          backgroundColor: "rgb(50, 50, 55)",
          borderTopRightRadius: "20px",
          borderEndEndRadius: "20px",
        }}
      >
      </Box>
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
          <img width="250px" src="src/images/chatIcon.svg"></img>
          <Typography
            sx={{
              fontSize: "26px",
              color: "rgb(230, 230, 230)",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Download the Windows app to improve the user experience
          </Typography>
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
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
