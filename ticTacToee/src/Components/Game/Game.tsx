import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Board from "../Board/Board.tsx";
import History from "../History/History.tsx";
import * as S from "./Game.styles"
import type { SquaresArray } from "./Game.types.ts";

const Game: React.FC = () => {
    const [history, setHistory] = useState<SquaresArray[]>([
        Array(9).fill(null) as SquaresArray,
    ]);

    const [squares, setSquares] = useState<SquaresArray>(history[0]);
    const [win, setWin] = useState<boolean>(false);
    const [currentMove, setCurrentMove] = useState<number>(
        history.length - 1
    );

    const isXnext: boolean = currentMove % 2 === 0;

    const calculateWinner = (squares: SquaresArray): void => {
        const lines: number[][] = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                setWin(true);
                return;
            }
        }
        setWin(false);
    };

    const updateBoard = (nextSquares: SquaresArray): void => {
        setSquares(nextSquares);
        setHistory((prevHistory) => [...prevHistory, nextSquares]);
        setCurrentMove((prev) => prev + 1);
        calculateWinner(nextSquares);
    };

    const changeBoardByHistory = (nextSquares: SquaresArray, moveNumber : number): void => {
        setHistory(history.slice(0,moveNumber+1));
        setSquares(nextSquares);
        setCurrentMove(moveNumber);
        calculateWinner(nextSquares);
    };

    const { width, height } = useWindowSize();
    return (
        <S.Container>
            <Board
                isXnext={isXnext}
                squares={squares}
                updateBoard={updateBoard}
                win={win}
            />
            <History
                history={history}
                changeBoardByHistory={changeBoardByHistory}
            >

            </History>
            {win && (
                <Confetti
                    width={width}
                    height={height}
                    colors={["#de4d86", "#f29ca3", "#f7cacd", "#ffc6ac", "#e49273"]}
                    gravity={0.2}
                />
            )}
        </S.Container >

    );
};

export default Game;
