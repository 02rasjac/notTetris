class Logic {
    colors;
    board = [];
    blocks;
    rotation;
    constructor() {
        // An object to reference colors
        this.colors = {
            "1": color(255, 0, 0), // Red
            "2": color(204, 0, 204), // Purple
            "3": color(0, 0, 255), // Blue
            "4": color(0, 255, 255), // Cyan
            "5": color(0, 255, 0), // Green
            "6": color(255, 255, 0), // Yellow
            "7": color(255, 128, 0), // Orange
        }

        // Rotation
        this.rotation = 1;
        this.activeRow = 1;
        this.activeCol = 1;

        // Create the board as an array
        this.reset();
        this.blocks = new Blocks(this.board);

        //! TESTING
        // this.board[0][0] = "1";
        // this.board[0][1] = "2";
        // this.board[0][2] = "3";
        // this.board[0][3] = "4";
        // this.board[0][4] = "5";
        // this.board[0][5] = "6";
        // this.board[0][6] = "7";

        console.log(this.board);
        this.checkOutOfBounds();
    }

    /**
     * Controll the board for blocks
     * 
     * @returns {void} 
     */
    checkBoard() {
        // Y-coordinate for rendered block
        let y = 0;
        // Loop the board to check for signs
        for (let i = 0; i < this.board.length; i++) {
            // X-coordinate for rendered block
            let x = 0;
            for (let j = 0; j < this.board[i].length; j++) {
                // The logical sign of the color
                let sign = this.board[i][j];

                // If the sign is not empty; render it as a block
                if (sign != "") {
                    // Render a block
                    this.blocks.drawBlock(
                        this.colors[sign[sign.length == 1 ? "0" : "1"]], 
                        x, y);
                }

                // If the sign first char is *; empty it
                if (sign != "" && sign[0] == "*") {
                    this.board[i][j] = "";
                }
                x += 20;
            }
            y += 20;
        }
    }

    checkOutOfBounds() {
        // TODO: USE MAP TO GET A 4*4 COPY OF THE ARRAY
        let updatedArray = this.board.slice(this.activeRow-2, this.activeRow+2).map(function(row) {
            return row.slice(this.activeCol-2, this.activeCol+2);
        })

        console.log(updatedArray);
    }

    /**
     * Updates the active Tetrimino
     * 
     * @param {string} tetri The Geometry to draw
     * @param {int} row Row-Position for rotation-point
     * @param {int} col Col-Position for rotation-point
     */
    activeTetri(tetri) {
        switch (tetri) {
            case "I":
                this.blocks.i(this.activeRow, this.activeCol, this.rotation);
                break;
            case "O":
                this.blocks.o(this.activeRow, this.activeCol, this.rotation);
                break;
            case "J":
                this.blocks.j(this.activeRow, this.activeCol, this.rotation);
                break;
            case "L":
                this.blocks.l(this.activeRow, this.activeCol, this.rotation);
                break;
            case "S":
                this.blocks.s(this.activeRow, this.activeCol, this.rotation);
                break;
            case "T":
                this.blocks.t(this.activeRow, this.activeCol, this.rotation);
                break;
            case "Z":
                this.blocks.z(this.activeRow, this.activeCol, this.rotation);
                break;
            default:
                break;
        }
    }

    /**
     * Initial spawn of a tetrimino at the top, center
     * @param {string} tetri Tetrimino to spawn
     */
    spawnTetri(tetri) {
        this.rotation = 1;
        //* CHANGE THIS TO THE CENTER WHEN READY
        this.activeTetri(tetri, 1, 4);
    }

    /**
     * Reset the board to an all empty
     * 
     * @returns {void}
     */
    reset() {
        this.board = [];
        // Create the board as an array
        for (let i = 0; i < 20; i++) {
            let row = [];
            for (let j = 0; j < 10; j++) {
                row.push("");
            }
            this.board.push(row);
        }
    }
}