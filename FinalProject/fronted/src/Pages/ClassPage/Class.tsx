import {
  darkNeatConfig,
  lightNeatConfig,
  NeatVisualizer,
} from "../../components/NestVisualizer/NeatVisualizer";
import ClassCard from "../../components/ClassCard/ClassCard";
import { getAllStudentClasses } from "../../Service/student";
import type { SchoolClass } from "../../Types/classTypes";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

const Classes: React.FC = () => {
  const theme = useTheme();
  const [classes, setClasses] = useState<SchoolClass[]>([]);

  const neatConfig =
    theme.palette.mode === "dark" ? darkNeatConfig : lightNeatConfig;

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getAllStudentClasses();
        setClasses(data);
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
