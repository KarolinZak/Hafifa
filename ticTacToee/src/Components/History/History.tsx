
import * as S from "./History.styles"
import type { HistoryProps } from "./History.types";


const History: React.FC<HistoryProps> = ({ history, changeBoardByHistory }) => {
    return (
        <>
            <S.HistoryBoard>
                <S.Text>Move History</S.Text>
                {history.length > 1 ?
                    history.slice(1).map((board, index) => (
                        <S.MoveContainer
                            onClick={() => changeBoardByHistory(board, index + 1)}
                        >
                            Move {index + 1}
                        </S.MoveContainer>
                    )) :
                    <S.MoveContainer
                    >
                        No History
                    </S.MoveContainer>
                }
            </S.HistoryBoard>
        </>
    );
};

export default History;
