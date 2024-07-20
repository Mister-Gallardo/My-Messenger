import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(30, 30, 35)",
        boxShadow: "0px 0px 5px 0px black",
        padding: "6px 0px 10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "900",
          fontFamily: '"Edu AU VIC WA NT Hand", cursive',
          textTransform: "none",
          fontSize: "30px",
          userSelect: "none",
          color: "whitesmoke",
        }}
      >
        My Messenger
      </Typography>
    </Box>
  );
}

export default Header;
