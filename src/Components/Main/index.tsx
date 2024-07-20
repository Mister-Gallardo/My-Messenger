import { Box } from "@mui/material";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";

function Main() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        backgroundColor: "rgb(65, 65, 70)",
      }}
    >
      <ChatList />
      <Chat />
    </Box>
  );
}

export default Main;
