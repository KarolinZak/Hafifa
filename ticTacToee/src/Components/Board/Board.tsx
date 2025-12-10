import type { BoardProps } from "./Board.types";
import * as S from "./Board.styles"
import type { SquaresArray } from "../Game/Game.types";


const Board: React.FC<BoardProps> = ({ isXnext, squares, updateBoard, win }) => {
    const moveHandler = (squareNumber: number) => {
        const nextSquares = [...squares] as SquaresArray
        nextSquares[squareNumber] = isXnext ? "X" : "O";

        updateBoard(nextSquares);
    };

    return (
        <>
            <S.Container>
                <S.Board>
                    <S.Text>
                        {win ? "You win!" : "Next player: " + (isXnext ? "X" : "O")}
                    </S.Text>
                    {[0, 1, 2].map(row => (
                        <S.Row className="row" key={row}>
                            {[0, 1, 2].map(col => {
                                const index = row * 3 + col;
                                return (
                                    <S.Square
                                        key={index}
                                        disabled={squares[index] !== null || win}
                                        className="square"
                                        onClick={() => moveHandler(index)}
                                    >
                                        {squares[index]}
                                    </S.Square>
                                );
                            })}
                        </S.Row>
                    ))}
                </S.Board>
            </S.Container>

        </>
    );
};

export default Board;
