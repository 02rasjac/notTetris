/**
 * Functions for rendering blocks
 */
class Blocks {
    constructor(logic) {
    }

    /**
     * Draw a single block
     * 
     * @param {Color} color Color of the blocks in RGB
     * @param {int} x x-position
     * @param {int} y y-position
     */
    drawBlock(color, x, y) {
        fill(color);
        rect(x, y, 20, 20);
    }

    /**
     * Make a straight tetrimino
     */
    i() {
        if (logic.rotation == 1) {
            logic.checkCollision(0, 9, 17);
            logic.board[logic.activeRow][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol] = "*4";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(2, 8, 18);
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-2] = "*4";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 10, 17);
            logic.board[logic.activeRow][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol-1] = "*4";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(2, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*4";
            logic.board[logic.activeRow][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow][logic.activeCol+1] = "*4";
            logic.board[logic.activeRow][logic.activeCol-2] = "*4";
        }
    }

    /**
     * Make a J-tetrimino
     */
    j() {
        if (logic.rotation == 1) {
            logic.checkCollision(1, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(0, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol] = "*3";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*3";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(1, 9, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol] = "*3";
        }
    }

    /**
     * Make a L-tetrimino
     */
    l() {
        if (logic.rotation == 1) {
            logic.checkCollision(1, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(0, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol] = "*7";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*7";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(1, 9, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol] = "*7";
        }
    }

    /**
     * Render a square tetrimino
     */
    o() {
        logic.checkCollision(1, 9, 19);
        logic.board[logic.activeRow][logic.activeCol] = "*6";
        logic.board[logic.activeRow-1][logic.activeCol] = "*6";
        logic.board[logic.activeRow-1][logic.activeCol-1] = "*6";
        logic.board[logic.activeRow][logic.activeCol-1] = "*6";
    }

    /**
     * Make a S-tetrimino
     */
    s() {
        if (logic.rotation == 1) {
            logic.checkCollision(1, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol-1] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*5";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(0, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*5";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*5";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(1, 9, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol-1] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*5";
        }
    }

    /**
     * Make a T-tetrimino
     */
    t() {
        if (logic.rotation == 1) {
            logic.checkCollision(1, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(0, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(1, 9, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
        }
    }

    /**
     * Make a Z-tetrimino
     */
    z() {
        if (logic.rotation == 1) {
            logic.checkCollision(1, 8, 19);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*1";
        }
        else if (logic.rotation == 2) {
            logic.checkCollision(0, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 3) {
            logic.checkCollision(1, 8, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 4) {
            logic.checkCollision(1, 9, 18);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
        }
    }
}