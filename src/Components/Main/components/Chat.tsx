import { useContext } from "react";
import InstallApp from "./InstallPage";
import { ChatContext } from "..";
import ChatPage from "./ChatPage";

function Chat() {
  const selectedContact = useContext(ChatContext)?.selectedContact;

  return (
    <>
      {selectedContact ? (
        <ChatPage />
      ) : (
        <InstallApp />
      )}
    </>
  );
}

export default Chat;
