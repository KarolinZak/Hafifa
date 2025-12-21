import { styled } from "@mui/material";
import { Link } from "react-router";
import themeColors from "../../themes";


export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
   color: themeColors.default.colors.coralRed,
   '&:hover': {
        color: themeColors.default.colors.coralRed,
        fontWeight: '500',
   },
}));

export const StyledText = styled("div")(({ theme }) => ({
  textDecoration: 'none',
   color: theme.palette.text.primary,
}));