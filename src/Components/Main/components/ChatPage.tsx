import { Box, Typography, Avatar, IconButton, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InstallApp from "./InstallPage";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { ChatContext } from "..";
import { IContact } from "../../../services/Interfaces";

function ChatPage() {
  const chatContext = useContext(ChatContext);

  if (!chatContext) return <InstallApp />;

  const { selectedContact, setSelectedContact } = chatContext;

  const [contact, setContact] = useState<IContact | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedContact(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);

  if (!contact) {
    return;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          padding: { xs: "8px 10px", md: "10px 20px" },
          backgroundColor: "rgb(50, 50, 55)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              margin: "0px -10px 0px -8px",
            }}
            onClick={() => setSelectedContact(null)}
          >
            <ArrowBackIcon sx={{ fontSize: "28px", color: "whitesmoke" }} />
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            src={contact.imageUrl}
            sx={{ width: "42px", height: "42px" }}
          />
          <Typography
            sx={{ color: "white", fontSize: "20px", fontWeight: "500" }}
          >
            {contact.name.slice(0, contact.name.indexOf(" "))}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: { xs: "2px", md: "10px" } }}>
          <IconButton
            sx={{
              padding: "7px",
              ":hover": { backgroundColor: "rgb(80, 80, 80)" },
            }}
          >
            <SearchIcon sx={{ fontSize: "28px", color: "whitesmoke" }} />
          </IconButton>
          <IconButton
            sx={{
              padding: "7px",
              ":hover": { backgroundColor: "rgb(80, 80, 80)" },
            }}
          >
            <CallIcon sx={{ fontSize: "28px", color: "whitesmoke" }} />
          </IconButton>
          <IconButton
            sx={{
              padding: "7px",
              ":hover": { backgroundColor: "rgb(80, 80, 80)" },
            }}
          >
            <MoreVertIcon sx={{ fontSize: "28px", color: "whitesmoke" }} />
          </IconButton>
        </Box>
      </Box>
      {/* Footer */}
      <Box
        sx={{
          width: "100%",
          marginTop: "auto",
          padding: { xs: "8px 5px", md: "10px 20px" },
          backgroundColor: "rgb(50, 50, 55)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <IconButton
          sx={{
            padding: "6px",
            ":hover": { backgroundColor: "rgb(80, 80, 80)" },
          }}
        >
          <TagFacesIcon sx={{ fontSize: "32px", color: "whitesmoke" }} />
        </IconButton>
        <IconButton
          sx={{
            padding: "6px",
            ":hover": { backgroundColor: "rgb(80, 80, 80)" },
          }}
        >
          <AddIcon sx={{ fontSize: "32px", color: "whitesmoke" }} />
        </IconButton>
        <TextField
          size="small"
          placeholder="Введите сообщение"
          multiline
          maxRows={6}
          sx={{
            minWidth: "185px",
            width: "85%",
            "& fieldset": {
              borderRadius: "10px",
              backgroundColor: "rgb(80, 80, 85)",
            },
            "& textarea::placeholder": {
              position: "absolute",
              zIndex: "10",
              color: "white",
            },
            "& textarea": {
              color: "white",
              position: "abosulte",
              zIndex: "15",
            },
          }}
        />
        <IconButton
          sx={{
            padding: "6px",
            ":hover": { backgroundColor: "rgb(80, 80, 80)" },
          }}
        >
          <KeyboardVoiceIcon sx={{ fontSize: "32px", color: "whitesmoke" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatPage;
