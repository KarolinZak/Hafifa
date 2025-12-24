import { Box, styled } from "@mui/material";
import colorTheme from "../../themes";

export const Text = styled("div")(() => ({
  fontSize: "1rem",
  margin: "10px",
  textAlign: "left",
}));


export const StyledBox = styled(Box)((
    {theme}
) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "10px",
    padding: "16px",
}));
