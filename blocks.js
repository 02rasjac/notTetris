//* TODO: I
//* TODO: J
//* TODO: L
//* TODO: O
//* TODO: S
//* TODO: T
//* TODO: Z

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
     * Check if the tetrimino collided with the walls and set the active column to the smallest/largest it can be
     * 
     * @param {int} minCol The smalles column the tetrimino can have based on rotatino
     * @param {int} maxCol The largest column the tetrimino can be in based on rotation
     */
    checkWallCollision(minCol, maxCol) {
        if (logic.activeCol < minCol) {
            logic.activeCol = minCol;
        }
        else if (logic.activeCol > maxCol) {
            logic.activeCol = maxCol;
        }
        console.log("Col: " + logic.activeCol + 
                    "\nRow: " + logic.activeRow +
                    "\nRot: " + logic.rotation);
    }

    /**
     * Make a straight tetrimino
     */
    i() {
        if (logic.rotation == 1) {
            this.checkWallCollision(0, 9);
            logic.board[logic.activeRow][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol] = "*4";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(2, 8);
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-2] = "*4";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 10);
            logic.board[logic.activeRow][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol-1] = "*4";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(2, 8);
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
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(0, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol] = "*3";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*3";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(1, 9);
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
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(0, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol] = "*7";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*7";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(1, 9);
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
        this.checkWallCollision(1, 9);
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
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol-1] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*5";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(0, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*5";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*5";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(1, 9);
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
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(0, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(1, 9);
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
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*1";
            
        }
        else if (logic.rotation == 2) {
            this.checkWallCollision(0, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 3) {
            this.checkWallCollision(1, 8);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 4) {
            this.checkWallCollision(1, 9);
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
        }
    }
}