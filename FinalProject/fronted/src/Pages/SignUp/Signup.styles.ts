import { styled } from "@mui/material";
import colorTheme from '../../themes';
import { Link } from "react-router";


export const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: "15px",
  textDecoration: "none",
  color: theme.palette.mode === "dark"
    ? colorTheme.default.colors.lightPink
    : colorTheme.default.colors.darkPurple,
  "&:hover": {
    fontWeight: "500",
  },
}));

export const StyledText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));
