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
    constructor(board=[[]]) {
        this.board = board;
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
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetrirotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    i(row, col, tetriRotation) {
        //this.updateActiveTetri();
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*4";
            this.board[row+1][col] = "*4";
            this.board[row-1][col] = "*4";
            this.board[row+2][col] = "*4";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            row += 1;
            this.board[row][col] = "*4";
            this.board[row][col-1] = "*4";
            this.board[row][col+1] = "*4";
            this.board[row][col-2] = "*4";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            col -= 1;
            this.board[row][col] = "*4";
            this.board[row+1][col] = "*4";
            this.board[row-1][col] = "*4";
            this.board[row+2][col] = "*4";
        }
        else if (tetriRotation == 4) {
            // If rotated left; 
            this.board[row][col] = "*4";
            this.board[row][col-1] = "*4";
            this.board[row][col+1] = "*4";
            this.board[row][col-2] = "*4";
        }
    }

    /**
     * Make a J-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetrirotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    j(row, col, tetriRotation) {
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*3";
            this.board[row][col-1] = "*3";
            this.board[row-1][col-1] = "*3";
            this.board[row][col+1] = "*3";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            this.board[row][col] = "*3";
            this.board[row-1][col] = "*3";
            this.board[row-1][col+1] = "*3";
            this.board[row+1][col] = "*3";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            this.board[row][col] = "*3";
            this.board[row][col-1] = "*3";
            this.board[row][col+1] = "*3";
            this.board[row+1][col+1] = "*3";
        }
        else if (tetriRotation == 4) {
            // If rotated left;
            this.board[row][col] = "*3";
            this.board[row-1][col] = "*3";
            this.board[row+1][col-1] = "*3";
            this.board[row+1][col] = "*3";
        }
    }

    /**
     * Make a L-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetrirotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    l(row, col, tetriRotation) {
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*7";
            this.board[row][col-1] = "*7";
            this.board[row-1][col+1] = "*7";
            this.board[row][col+1] = "*7";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            this.board[row][col] = "*7";
            this.board[row-1][col] = "*7";
            this.board[row+1][col+1] = "*7";
            this.board[row+1][col] = "*7";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            this.board[row][col] = "*7";
            this.board[row][col-1] = "*7";
            this.board[row][col+1] = "*7";
            this.board[row+1][col-1] = "*7";
        }
        else if (tetriRotation == 4) {
            // If rotated left; 
            
            this.board[row][col] = "*7";
            this.board[row-1][col] = "*7";
            this.board[row-1][col-1] = "*7";
            this.board[row+1][col] = "*7";
        }
    }

    /**
     * Render a square tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetriRotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    o(row, col, tetriRotation) {
        //this.updateActiveTetri();
        // Render 4 blocks
        this.board[row][col] = "*6";
        this.board[row-1][col] = "*6";
        this.board[row-1][col-1] = "*6";
        this.board[row][col-1] = "*6";
    }

    /**
     * Make a S-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetriRotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    s(row, col, tetriRotation) {
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*5";
            this.board[row][col-1] = "*5";
            this.board[row-1][col] = "*5";
            this.board[row-1][col+1] = "*5";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            this.board[row][col] = "*5";
            this.board[row-1][col] = "*5";
            this.board[row][col+1] = "*5";
            this.board[row+1][col+1] = "*5";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            this.board[row][col] = "*5";
            this.board[row][col+1] = "*5";
            this.board[row+1][col] = "*5";
            this.board[row+1][col-1] = "*5";
        }
        else if (tetriRotation == 4) {
            // If rotated left; 
            this.board[row][col] = "*5";
            this.board[row+1][col] = "*5";
            this.board[row][col-1] = "*5";
            this.board[row-1][col-1] = "*5";
        }
    }

    /**
     * Make a T-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetriRotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    t(row, col, tetriRotation) {
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*2";
            this.board[row][col-1] = "*2";
            this.board[row][col+1] = "*2";
            this.board[row-1][col] = "*2";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            this.board[row][col] = "*2";
            this.board[row-1][col] = "*2";
            this.board[row+1][col] = "*2";
            this.board[row][col+1] = "*2";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            this.board[row][col] = "*2";
            this.board[row][col+1] = "*2";
            this.board[row][col-1] = "*2";
            this.board[row+1][col] = "*2";
        }
        else if (tetriRotation == 4) {
            // If rotated left; 
            this.board[row][col] = "*2";
            this.board[row+1][col] = "*2";
            this.board[row-1][col] = "*2";
            this.board[row][col-1] = "*2";
        }
    }

    /**
     * Make a Z-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetriRotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    z(row, col, tetriRotation) {
        // Render 4 blocks
        if (tetriRotation == 1) {
            // If rotated up;
            this.board[row][col] = "*1";
            this.board[row][col+1] = "*1";
            this.board[row-1][col] = "*1";
            this.board[row-1][col-1] = "*1";
            
        }
        else if (tetriRotation == 2) {
            // If rotated right;
            this.board[row][col] = "*1";
            this.board[row+1][col] = "*1";
            this.board[row][col+1] = "*1";
            this.board[row-1][col+1] = "*1";
        }
        else if (tetriRotation == 3) {
            // If rotated down; 
            this.board[row][col] = "*1";
            this.board[row][col-1] = "*1";
            this.board[row+1][col] = "*1";
            this.board[row+1][col+1] = "*1";
        }
        else if (tetriRotation == 4) {
            // If rotated left; 
            this.board[row][col] = "*1";
            this.board[row][col-1] = "*1";
            this.board[row+1][col-1] = "*1";
            this.board[row-1][col] = "*1";
        }
    }

    //! ======================
    //! ------DO NOT USE------
    //! ======================
    // updateActiveTetri() {
    //     let y = 0;
    //     for (let i = 0; i < this.board.length; i++) {
    //         // X-coordinate
    //         let x = 0;
    //         for (let j = 0; j < this.board[i].length; j++) {
    //             // The logical sign of the color
    //             let sign = this.board[i][j];

    //             // If the sign first char is *; empty it
    //             if (sign != "" && sign[0] == "*") {
    //                 this.board[i][j] = "";
    //             }
    //             x += 20;
    //         }
    //         y += 20;
    //     }
    // } 
}