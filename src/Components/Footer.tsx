import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(30, 30, 35)",
        marginTop: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "35px",
        minHeight: '35px',
        padding: "0px 25px",
        userSelect: "none",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          color: "white",
        }}
      >
        ©️󠀩 All rights reserved
      </Typography>
      <Typography
        sx={{
          fontFamily: "Edu AU VIC WA NT Hand, cursive",
          fontSize: "16px",
          color: "white",
          fontWeight: "500",
        }}
      >
        Mr. Gallardo
      </Typography>
    </Box>
  );
}

export default Footer;
