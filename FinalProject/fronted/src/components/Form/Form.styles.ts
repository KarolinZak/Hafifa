import MuiTextField from "@mui/material/TextField";
import MuiButton from "@mui/material/Button";
import { alpha, styled } from "@mui/material";
import colorTheme from "../../themes";

export const card = styled("form")(({ theme }) => ({
  padding: "30px",
  width: "fit-content",
  height: "fit-content",
  borderRadius: "1vw",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  margin: "10px",
  minWidth: "40vh",
  minHeight: "30vh",
  position: "relative",
  zIndex: 1,


  background: alpha(theme.palette.background.paper, 0.3), // semi-transparent
  backdropFilter: "blur(10px)", // blur background behind
  WebkitBackdropFilter: "blur(10px)", // Safari support
  border: `1px solid ${alpha(theme.palette.background.paper, 0.3)}`, // optional border for nicer look

}));



export const header = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: "4vh",
  margin: 0,
}));


export const text = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1rem",
  margin: 0,
}));


export const formButton = styled(MuiButton)(({ theme }) => ({
  width: "40vh",
  height: "40px", 
  background: theme.palette.mode === "dark"
    ? colorTheme.default.colors.darkPurple
    : colorTheme.default.colors.lightPink,
  color:  theme.palette.mode === "dark"
    ? colorTheme.default.colors.white
    : colorTheme.default.colors.black
}));

export const StyledTextField = styled(MuiTextField)(() => ({
   width: "40vh" 
}));