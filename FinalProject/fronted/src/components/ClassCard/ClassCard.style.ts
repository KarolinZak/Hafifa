import CardActions from "@mui/material/CardActions";
import MuiButton from "@mui/material/Button";
import { CardMedia } from "@mui/material";
import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import colorTheme from "../../themes";

export const header = styled("div")(() => ({
  fontWeight: 500,
  fontSize: "25px",
  margin: "10px",
}));

export const Text = styled("div")(() => ({
  fontSize: "1rem",
  margin: "10px",
  textAlign: "left",
}));

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? colorTheme.default.colors.darkPurple
      : colorTheme.default.colors.lightPink,
    fontWeight: "bold",
}));

export const StyledCardActions = styled(CardActions)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const StyledCard = styled(Card)(() => ({
  minWidth: "10vh",
  marginTop: "5vh",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.27)",
  borderRadius: "10px",
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  minHeight: "17vh",
}));

export const CardsContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",       
  gap: "24px",             
  justifyContent: "flex-start",
}));