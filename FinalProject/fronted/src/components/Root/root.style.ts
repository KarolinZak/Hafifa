import styled from "styled-components";
import themeColors from "../../themes";

export const Root = styled("div")(() => ({
fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
minWidth: "100vw",
minHeight: "100vh", 
display: "flex",
placeItems: "center",
margin: 0,    
background: themeColors.palette.background.default,
}));
