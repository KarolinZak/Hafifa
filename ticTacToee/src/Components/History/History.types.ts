import type { SquaresArray } from "../Game/Game.types";

export interface HistoryProps {
    history: SquaresArray[];
    changeBoardByHistory: (nextSquares: SquaresArray, moveNumber : number) => void;
};