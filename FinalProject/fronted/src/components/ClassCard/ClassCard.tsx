import type { ClassCardProps } from "../../Types/classCardTypes";
import type { SchoolClass } from "../../Types/classTypes";
import { subjectImage } from "../../Consts/imageConsts";
import BasicModal from "../studentModal/StudentModal";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import * as S from "./ClassCard.style";
import {useState} from "react";

const ClassCard: React.FC<ClassCardProps> = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<SchoolClass | null>(
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
            <S.StyledCardActions>
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
            </S.StyledCardActions>
          </S.StyledCard>
        ))}
      </S.CardsContainer>
    </>
  );
};

export default ClassCard;
