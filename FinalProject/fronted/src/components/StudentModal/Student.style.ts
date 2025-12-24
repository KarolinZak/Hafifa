import { Box, styled } from "@mui/material";
import MuiButton from "@mui/material/Button";
import colorTheme from "../../themes";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import DeleteIcon from "@mui/icons-material/Delete";

export const Text = styled("div")(() => ({
  fontSize: "1rem",
  margin: "10px",
  textAlign: "center",
}));

export const header = styled("div")(() => ({
  fontWeight: 500,
  fontSize: "20px",
  margin: "10px",
  paddingBottom: "10px",
  textAlign: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: "10px",
  padding: "15px",
}));

export const StyledButton = styled(MuiButton)(() => ({
  fontWeight: "bold",
}));

export const StyledProfileIcon = styled(AccountCircleIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledDeleteIcon = styled(DeleteIcon)(({theme}) => ({
  color: theme.palette.mode === "dark"
        ? colorTheme.default.colors.darkPurple
        : colorTheme.default.colors.lightPink,
}));

export const StudentContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "15vw",
}));
