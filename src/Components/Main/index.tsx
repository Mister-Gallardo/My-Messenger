import { Box } from "@mui/material";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import { createContext, useState } from "react";
import { IContact } from "../../services/Interfaces";

export const ChatContext = createContext<{
  selectedContact: IContact | null;
  setSelectedContact: React.Dispatch<React.SetStateAction<IContact | null>>;
} | null>(null);

function Main() {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  return (
    <ChatContext.Provider value={{ selectedContact, setSelectedContact }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "rgb(65, 65, 70)",
        }}
      >
        <Box
          sx={{
            display: { xs: selectedContact ? "none" : "block", md: "flex" },
            width: { xs: "100vw", md: "auto" },
          }}
        >
          <ChatList />
        </Box>
        <Box sx={{ 
          display: { xs: selectedContact ? "block" : "none", md: "flex" },
          width: { xs: "100%", md: "100%" }, height: '100%', flexGrow: "1" 
          }}>
          <Chat />
        </Box>
      </Box>
    </ChatContext.Provider>
  );
}

export default Main;
