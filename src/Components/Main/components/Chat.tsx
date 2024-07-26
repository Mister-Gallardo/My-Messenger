import { useContext } from "react";
import InstallApp from "./InstallPage";
import { ChatContext } from "..";
import ChatPage from "./ChatPage";
import { Box } from "@mui/material";

function Chat() {
  const selectedContact = useContext(ChatContext)?.selectedContact;

  return (
    <Box sx={{height: '100%', width: '100%'}}>
      {selectedContact ? (
        <ChatPage />
      ) : (
        <InstallApp />
      )}
    </Box>
  );
}

export default Chat;
