import type { SquaresArray } from "../Game/Game.types";

export interface BoardProps {
    isXnext: boolean;
    squares: (string | null)[];
    updateBoard: (nextSquares: SquaresArray) => void;
    win: boolean;
};