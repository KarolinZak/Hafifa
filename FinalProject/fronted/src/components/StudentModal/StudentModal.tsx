import * as React from "react";
import Box from "@mui/material/Box";
import * as S from "./Student.style";
import Modal from "@mui/material/Modal";
import type { Student } from "../../Types/studentTypes";
import type { SchoolClass } from "../../Types/classTypes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 5,
  p: 4,
  borderRadius: "10px",
};

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
          <S.Text id="modal-modal-title">
            {selectedClass?.name} class students
          </S.Text>
          {selectedClass?.students.map((student: Student) => (
            <S.Text key={student.id}>
              {student.firstName} {student.lastName} 
              </S.Text>
          ))}
        </S.StyledBox>
      </Modal>
    </div>
  );
};

export default BasicModal;
