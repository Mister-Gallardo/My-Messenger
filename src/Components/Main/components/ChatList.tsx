import {
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import getContacts from "../../../services/Api";
import { IContact } from "../../../services/Interfaces";
import ChatButton from "./ChatButton";

function ChatList() {
  const [value, setValue] = useState("");
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    const response = await getContacts();
    setContacts(response);
    setLoading(false);
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "380px",
        borderRight: "1px solid white",
        backgroundColor: "rgb(50, 50, 55)",
        borderTopRightRadius: "20px",
        borderEndEndRadius: "20px",
        padding: "12px 14px",
      }}
    >
      <TextField
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        size="small"
        placeholder="Поиск"
        variant="outlined"
        sx={{
          marginBottom: "15px",
          backgroundColor: "rgb(230, 230, 240)",
          width: "100%",
          borderRadius: "15px",
          "& fieldset": { border: "none" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          height: "74.5vh",
          overflowY: "auto",
          display: "flex",
          padding: "3px 10px",
          flexDirection: "column",
          gap: '8px',
          borderTop: "1px white solid",
          borderBottom: "1px white solid",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "25px",
          },
        }}
      >
        {loading ? (
          <CircularProgress size={70} sx={{ margin: "100px auto" }} />
        ) : (
          contacts.map((contact: IContact) => (
            <ChatButton key={contact.recipeId} contact={contact} />
          ))
        )}
      </Box>
    </Box>
  );
}

export default ChatList;
