import MuiTextField from "@mui/material/TextField";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material";

export const card = styled("form")(({ theme }) => ({
  padding: "2rem",
  background: theme.palette.background.default,
  width: "fix-content",
  height: "fix-content",
  borderRadius: "1vw",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  margin: "1rem",
  minWidth: "40vh",
  minHeight: "30vh",
}));

export const header = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "4vh",
  margin: 0,
}));


export const text = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  margin: 0,
}));


export const formButton = styled(MuiButton)(() => ({
  width: "40vh",
  height: "40px", 
  background: "#d55c5c"
}));

export const StyledTextField = styled(MuiTextField)(() => ({
   width: "40vh" 
}));