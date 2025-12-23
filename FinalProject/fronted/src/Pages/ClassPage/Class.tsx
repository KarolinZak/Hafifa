import React from "react";
import ClassCard from "../../components/ClassCard/ClassCard";
import { useTheme } from "@mui/material/styles";
import { darkNeatConfig, lightNeatConfig, NeatVisualizer } from "../../components/NestVisualizer/NeatVisualizer";

const Classes : React.FC = () => {
    const theme = useTheme();
    
      const neatConfig =
        theme.palette.mode === "dark" ? darkNeatConfig : lightNeatConfig;
  return (
    <>
    <NeatVisualizer config={neatConfig} />
      <ClassCard />
    </>
  );
};

export default Classes;
