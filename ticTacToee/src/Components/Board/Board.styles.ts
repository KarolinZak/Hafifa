import { styled } from "@mui/material";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const Board = styled("div")({
  display: "grid",
  padding: "2rem",
  background: "#fce7e9",
  borderRadius: "1vw",
  width: "min-content",
  height: "min-content",
});

export const Square = styled("button")({
  width: "7vw",
  aspectRatio: "1", 
  fontSize: "2rem",
  backgroundColor: "#ffc0cb",
  borderColor: "transparent",
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
});

export const Text = styled("p")({
  gridColumn: "span 3",
  textAlign: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: "0",
  fontWeight: "600",
});
export const Row = styled("div")({
  color: "transparent",
});
