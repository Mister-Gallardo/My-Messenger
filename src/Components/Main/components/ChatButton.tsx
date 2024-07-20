import { Avatar, Button, Typography } from "@mui/material";
import { IContact } from "../../../services/Interfaces";

export default function ChatButton({ contact }: { contact: IContact }) {
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
    >
      <Avatar
        alt="Remy Sharp"
        src={contact.imageUrl}
        sx={{ width: "50px", height: "50px" }}
      />
      <Typography sx={{ color: "white", fontSize: "24px" }}>
        {contact.name.slice(0, contact.name.indexOf(" "))}
      </Typography>
    </Button>
  );
}
