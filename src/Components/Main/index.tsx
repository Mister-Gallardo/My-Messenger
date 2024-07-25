import { Box } from "@mui/material";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import { createContext, useState } from "react";
import { IContact } from "../../services/Interfaces";

export const ChatContext = createContext<{selectedContact: IContact | null; setSelectedContact: React.Dispatch<React.SetStateAction<IContact | null>>} | null>(null);

function Main() {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  return (
    <ChatContext.Provider value={{selectedContact, setSelectedContact}}>
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
    </ChatContext.Provider>
  );
}

export default Main;
