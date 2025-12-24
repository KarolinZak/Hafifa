import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import * as S from "./ClassCard.style";
import React from "react";
import type { SchoolClass } from "../../Types/classTypes";
import { subjectImage } from "../../Consts/imageConsts";
import BasicModal from "../StudentModal/StudentModal";

const ClassCard: React.FC<{ classes: SchoolClass[] }> = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState<SchoolClass | null>(
    null
  );
  return (
    <>
      <S.CardsContainer>
        {classes.map((schoolClass) => (
          <S.StyledCard key={schoolClass.id}>
            <S.StyledCardMedia
              image={
                subjectImage.find((img) => img.name === schoolClass.name)?.src
              }
              title={schoolClass.name}
            />
            <CardContent>
              <S.header>{schoolClass.name}</S.header>
              <S.Text>
                There are {schoolClass.students.length} student.
                <br />
                Seats left for{" "}
                {schoolClass.numOfPlaces - schoolClass.students.length} more
                students.
              </S.Text>
            </CardContent>
            <CardActions>
              <S.StyledButton
                size="small"
                onClick={() => {
                  setOpen(true);
                  setSelectedClass(schoolClass);
                }}
              >
                student list
              </S.StyledButton>
              <BasicModal setOpen={setOpen} open={open} selectedClass={selectedClass} />
              <S.StyledButton size="small">
                <DeleteIcon />
              </S.StyledButton>
            </CardActions>
          </S.StyledCard>
        ))}
      </S.CardsContainer>
    </>
  );
};

export default ClassCard;
