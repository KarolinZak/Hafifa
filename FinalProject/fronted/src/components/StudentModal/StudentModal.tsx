import * as React from "react";
import * as S from "./Student.style";
import Modal from "@mui/material/Modal";
import type { Student } from "../../Types/studentTypes";
import type { SchoolClass } from "../../Types/classTypes";

const BasicModal: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  selectedClass: SchoolClass | null;
}> = ({ setOpen, open, selectedClass }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.06)",
            },
          },
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.StyledBox>
          <S.header id="modal-modal-title">
            {selectedClass?.name} class students
          </S.header>
          {selectedClass?.students.map((student: Student) => (
            <S.StudentContainer>
                <S.StyledButton size="small">
                <S.StyledProfileIcon />
              </S.StyledButton>
              <S.Text key={student.id}>
                {student.firstName} {student.lastName}
              </S.Text>
              <S.StyledButton size="small">
                <S.StyledDeleteIcon />
              </S.StyledButton>
            </S.StudentContainer>
              
          ))}
        </S.StyledBox>
      </Modal>
    </div>
  );
};

export default BasicModal;
