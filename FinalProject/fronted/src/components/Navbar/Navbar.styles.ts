import { styled } from "@mui/material";

export const HistoryBoard = styled("div")({
   display: "grid",
  padding: "1rem",
  background: "#fce7e9",
  borderRadius: "1vw",
  gridAutoFlow: "row",
  gap: "5px",
   width: "fit-content", 
  height: "fit-content",
});

export const MoveContainer = styled("button")({
  width: "15vw",
  height: "2vw",
  margin: "0",
  fontSize: "1rem",
  backgroundColor: "#fff6f8ff",
  borderColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, Helvetica, sans-serif",

});

export const Text = styled("p")({
  textAlign: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: "0",
  fontWeight: "600",
});