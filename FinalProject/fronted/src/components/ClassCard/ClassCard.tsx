import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import scienceImg from "../../Assets/Science.png";
import * as S from "./ClassCard.style";
import React from "react";

const ClassCard: React.FC = ({}) => {

  return (
     <>

    <S.StyledCard>
      <S.StyledCardMedia
        image={scienceImg}
        title="green iguana"
      />
      <CardContent>
        <S.header> 
          Science class
        </S.header>
        <S.Text >
          There are 18 student.
          <br/>
          Seats left for 2 more students.
        </S.Text>
      </CardContent>
      <CardActions>
        <S.StyledButton size="small">student list</S.StyledButton>
        <S.StyledButton size="small"><DeleteIcon /></S.StyledButton>
      </CardActions>
    </S.StyledCard>
     </>
    
  );
};

export default ClassCard;
