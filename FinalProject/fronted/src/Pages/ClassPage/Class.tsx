import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";
import { useTheme } from "@mui/material/styles";
import { darkNeatConfig, lightNeatConfig, NeatVisualizer } from "../../components/NestVisualizer/NeatVisualizer";
import { getAllStudentClasses } from "../../Service/student";
import type { SchoolClass } from "../../Types/classTypes";

const Classes: React.FC = () => {
  const theme = useTheme();
  const [classes, setClasses] = useState<SchoolClass[]>([]);

  const neatConfig = theme.palette.mode === "dark" ? darkNeatConfig : lightNeatConfig;

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getAllStudentClasses(1);
        setClasses(data); 
        console.log(data);
      } catch (err) {
        console.error("Failed to fetch classes:", err);
      }
    };
    fetchClasses();
  }, []);

  return (
    <>
      <NeatVisualizer config={neatConfig} />
      <ClassCard classes={classes} />
    </>
  );
};

export default Classes;
