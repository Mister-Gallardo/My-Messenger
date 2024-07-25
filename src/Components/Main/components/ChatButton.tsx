import { Avatar, Button, Typography } from "@mui/material";
import { IContact } from "../../../services/Interfaces";
import { useContext } from "react";
import { ChatContext } from "..";

export default function ChatButton({ contact }: { contact: IContact }) {
  const value = useContext(ChatContext);
  
  return (
    <Button
      sx={{
        padding: "7px 0px",
        display: "flex",
        justifyContent: "start",
        gap: "12px",
        width: "100%",
        textTransform: "none",
        borderBottom: "1px solid rgb(80, 80, 80)",
        borderRadius: "0px",
      }}
      onClick={() => value?.setSelectedContact(contact)}
    >
      <Avatar
        alt="Remy Sharp"
        src={contact.imageUrl}
        sx={{ width: "50px", height: "50px" }}
      />
      <Typography sx={{ color: "white", fontSize: "22px" }}>
        {contact.name.slice(0, contact.name.indexOf(" "))}
      </Typography>
    </Button>
  );
}
