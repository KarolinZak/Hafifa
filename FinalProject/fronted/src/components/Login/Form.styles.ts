import { styled } from "@mui/material";

export const card = styled("form")(({ theme }) => ({
  padding: "1rem",
  background: theme.palette.background.default,
  width: "fix-content",
  height: "fix-content",
  borderRadius: "1vw",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center"
}));

export const header = styled("p")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "4vh",
  margin: 0,
}));


export const text = styled("p")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  margin: 0,
}));


