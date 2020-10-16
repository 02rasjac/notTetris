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
        console.log(logic.board);
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
    i() {
        //this.updateActiveTetri();
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol] = "*4";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            //logic.activeRow += 1;
            logic.board[logic.activeRow+1][logic.activeCol] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-2] = "*4";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            //logic.activeCol -= 1;
            logic.board[logic.activeRow][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow+2][logic.activeCol-1] = "*4";
        }
        else if (logic.rotation == 4) {
            // If rotated left; 
            logic.board[logic.activeRow][logic.activeCol] = "*4";
            logic.board[logic.activeRow][logic.activeCol-1] = "*4";
            logic.board[logic.activeRow][logic.activeCol+1] = "*4";
            logic.board[logic.activeRow][logic.activeCol-2] = "*4";
        }
    }

    /**
     * Make a J-tetrimino
     * 
     * @param {int} row The position for the row in the array
     * @param {int} col The position for the column in the array
     * @param {int} tetrirotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    j() {
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol] = "*3";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow][logic.activeCol+1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*3";
        }
        else if (logic.rotation == 4) {
            // If rotated left;
            logic.board[logic.activeRow][logic.activeCol] = "*3";
            logic.board[logic.activeRow-1][logic.activeCol] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*3";
            logic.board[logic.activeRow+1][logic.activeCol] = "*3";
        }
    }

    /**
     * Make a L-tetrimino
     * 
     * @param {int} logic.activeRow The position for the logic.activeRow in the array
     * @param {int} logic.activeCol The position for the logic.activeColumn in the array
     * @param {int} logic.rotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    l() {
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol] = "*7";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow][logic.activeCol+1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*7";
        }
        else if (logic.rotation == 4) {
            // If rotated left; 
            
            logic.board[logic.activeRow][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol] = "*7";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*7";
            logic.board[logic.activeRow+1][logic.activeCol] = "*7";
        }
    }

    /**
     * Render a square tetrimino
     * 
     * @param {int} logic.activeRow The position for the logic.activeRow in the array
     * @param {int} logic.activeCol The position for the logic.activeColumn in the array
     * @param {int} logic.rotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    o() {
        //this.updateActiveTetri();
        // Render 4 blocks
        logic.board[logic.activeRow][logic.activeCol] = "*6";
        logic.board[logic.activeRow-1][logic.activeCol] = "*6";
        logic.board[logic.activeRow-1][logic.activeCol-1] = "*6";
        logic.board[logic.activeRow][logic.activeCol-1] = "*6";
    }

    /**
     * Make a S-tetrimino
     * 
     * @param {int} logic.activeRow The position for the logic.activeRow in the array
     * @param {int} logic.activeCol The position for the logic.activeColumn in the array
     * @param {int} logic.rotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    s() {
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol-1] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*5";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*5";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol+1] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*5";
        }
        else if (logic.rotation == 4) {
            // If rotated left; 
            logic.board[logic.activeRow][logic.activeCol] = "*5";
            logic.board[logic.activeRow+1][logic.activeCol] = "*5";
            logic.board[logic.activeRow][logic.activeCol-1] = "*5";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*5";
        }
    }

    /**
     * Make a T-tetrimino
     * 
     * @param {int} logic.activeRow The position for the logic.activeRow in the array
     * @param {int} logic.activeCol The position for the logic.activeColumn in the array
     * @param {int} logic.rotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    t() {
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol+1] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
        }
        else if (logic.rotation == 4) {
            // If rotated left; 
            logic.board[logic.activeRow][logic.activeCol] = "*2";
            logic.board[logic.activeRow+1][logic.activeCol] = "*2";
            logic.board[logic.activeRow-1][logic.activeCol] = "*2";
            logic.board[logic.activeRow][logic.activeCol-1] = "*2";
        }
    }

    /**
     * Make a Z-tetrimino
     * 
     * @param {int} logic.activeRow The position for the logic.activeRow in the array
     * @param {int} logic.activeCol The position for the logic.activeColumn in the array
     * @param {int} logic.rotation Rotation (1=up, 2=right, 3=down, 4=left)
     */
    z() {
        // Render 4 blocks
        if (logic.rotation == 1) {
            // If rotated up;
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol-1] = "*1";
            
        }
        else if (logic.rotation == 2) {
            // If rotated right;
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol+1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 3) {
            // If rotated down; 
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol+1] = "*1";
        }
        else if (logic.rotation == 4) {
            // If rotated left; 
            logic.board[logic.activeRow][logic.activeCol] = "*1";
            logic.board[logic.activeRow][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow+1][logic.activeCol-1] = "*1";
            logic.board[logic.activeRow-1][logic.activeCol] = "*1";
        }
    }

    //! ======================
    //! ------DO NOT USE------
    //! ======================
    // updateActiveTetri() {
    //     let y = 0;
    //     for (let i = 0; i < logic.board.length; i++) {
    //         // X-coordinate
    //         let x = 0;
    //         for (let j = 0; j < logic.board[i].length; j++) {
    //             // The logical sign of the color
    //             let sign = logic.board[i][j];

    //             // If the sign first char is *; empty it
    //             if (sign != "" && sign[0] == "*") {
    //                 logic.board[i][j] = "";
    //             }
    //             x += 20;
    //         }
    //         y += 20;
    //     }
    // } 
}