import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material";

export const UserContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "10px",
}));

export const Avatar = styled("img")(() => ({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  objectFit: "cover",
}));

export const TextContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const NameText = styled("div")(() => ({
  fontSize: "1rem",
  fontWeight: 600,
}));

export const ListItemTextStyled = styled(ListItemText)(() => ({
  fontSize: "5px",
  fontWeight: 600,
}));

export const EmailText = styled("div")(() => ({
  marginTop: "4px",
  fontSize: "0.875rem",
  color: "#666",
}));
