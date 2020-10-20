class Logic {
    /**@var {bool} hitFloor A flag wheter the tetri collided with floor */
    hitFloor = false;

    /**@var {float} speed the falling speed in blocks per seconds*/
    speed = 1000;
    fallTimer = 0;

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

        // Positions
        this.rotation = 1;
        this.activeRow = 1;
        this.activeCol = 1;

        // Create the board as an array
        this.reset();
        this.blocks = new Blocks(this);
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
                    this.blocks.drawBlock(
                        this.colors[sign[sign.length == 1 ? "0" : "1"]], 
                        x, y);

                    // If the sign first char is *; empty it
                    if (sign[0] == "*") {
                        this.board[i][j] = "";
                    }
                }
                x += 20;
            }
            y += 20;
        }
    }

    /**
     * Updates the active Tetrimino
     * 
     * @param {string} tetri The Geometry to draw
     */
    activeTetri(tetri) {
        switch (tetri) {
            case "I":
                this.blocks.i();
                break;
            case "O":
                this.blocks.o();
                break;
            case "J":
                this.blocks.j();
                break;
            case "L":
                this.blocks.l();
                break;
            case "S":
                this.blocks.s();
                break;
            case "T":
                this.blocks.t();
                break;
            case "Z":
                this.blocks.z();
                break;
            default:
                break;
        }

        // If collision bottom; Kill it
        if (this.hitFloor) {
            this.killTetri();
            this.hitFloor = false;
            this.spawnTetri();
        }
    }

    /**
     * Check if the tetrimino collided and prevent it from going through
     * 
     * @param {int} minCol The smalles column the tetrimino can have based on rotatino
     * @param {int} maxCol The largest column the tetrimino can be in based on rotation
     * @param {int} maxRow The largest row the tetrimino can be in based on rotation
     */
    checkCollision(minCol, maxCol, maxRow) {
        // Check collision with walls
        if (this.activeCol < minCol) {
            this.activeCol = minCol;
        }
        else if (this.activeCol > maxCol) {
            this.activeCol = maxCol;
        }

        // Check collision with floor
        if (this.activeRow > maxRow) {
            this.activeRow = maxRow;
            this.hitFloor = true;
        }
        console.log("Col: " + this.activeCol + 
                    "\nRow: " + this.activeRow +
                    "\nRot: " + this.rotation);
    }

    /**
     * Initial spawn of a tetrimino at the top, center
     */
    spawnTetri() {
        this.rotation = 1;
        this.activeRow = 1;
        this.activeCol = 5;
    }

    /**
     * Removes the * from the sign to "kill" it
     */
    killTetri() {
        // Loop the board to check for signs
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                // The logical sign of the color
                let sign = this.board[i][j];
                
                // If the sign first char is *; Delete the *
                if (sign[0] == "*") {
                    this.board[i][j] = sign[1];
                    console.log("Removing asterisk");
                }
            }
        }
    }

    /**
     * Let the tetrimino fall at normal speed
     */
    gravity() {
        this.fallTimer += deltaTime;
        if (this.fallTimer >= this.speed) {
            this.activeRow++;
            this.fallTimer = 0;
        }
    }

    /**
     * Reset the board to an all empty
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