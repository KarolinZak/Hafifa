import { styled } from "@mui/material";
import { Link } from "react-router";


export const StyledLink = styled(Link)(() => ({
   color: "#ffffff",
   '&:hover': {
        color: "#d55c5c",
   },
}));