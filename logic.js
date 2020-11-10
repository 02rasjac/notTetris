class Logic {
    /**@var {string} tetrimino The current tetrimino*/
    tetrimino;
    /**@var {bool} hitFloor A flag wheter the tetri collided with floor */
    hitFloor = false;
    /**@var {bool} hitBlock A flag wheter the tetri collided with another block */
    hitBlock = false;

    /**@var {float} speed the falling speed in blocks per seconds*/
    speed = 1000;

    /**@var {int} currentSpeed The actual speed it should have without the player smashing or moving fast */
    currentSpeed = 1000;
    fallTimer = 0;

    /**@var {bool} hasEnded Wheter the player lost or not */
    hasEnded = false;

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

        this.possibleTetriminos = [
            "I", "J", "L", "O", "S", "T", "Z"
        ];

        this.tetrimino = "I";

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
                        this.checkBorderCollision();
                        this.checkBlockCollision(i, j);
                        this.board[i][j] = "";
                    }
                }
                x += 20;
            }
            y += 20;
        }
    }

    /**
     * Check for full rows, remove full rows and move down
     * all rows above.
     */
    checkRows() {
        for (let i = this.board.length-1; i >= 0; i--) {
            let numberOfBlocks = 0;
            let removed = false;
            
            for (let j = 0; j < this.board[i].length; j++) {
                let sign = this.board[i][j];

                // The row is not full; don't remove it
                if (sign === "") {
                    break;
                }
                else {
                    numberOfBlocks++;
                }

                // If row is full; Empty all collumns
                if (numberOfBlocks == this.board[i].length) {
                    removed = this.removeRow(i);
                }
            }

            if (removed) {
                i++;
                removed = false;
            }
        }
    }

    /**
     * Remove the row and move it down
     * @param {int} removingRow The row to remove
     * @returns {bool} 'true' if succesfully removed the row
     */
    removeRow(removingRow) {
        // Empty the row
        for (let col = 0; col < this.board[removingRow].length; col++) {
            this.board[removingRow][col] = "";
        }

        // Move down all rows above once
        for (let row = removingRow; row >= 0; row--) {
            for (let col = 0; col < this.board[row].length; col++) {
                try {
                    this.board[row][col] = this.board[row-1][col];
                }
                catch {}
            }
        }

        return true;
    }

    /**
     * Check if the tetrimino collided and prevent it from going through
     * 
     * @param {int} minCol The smalles column the tetrimino can have based on rotatino
     * @param {int} maxCol The largest column the tetrimino can be in based on rotation
     * @param {int} maxRow The largest row the tetrimino can be in based on rotation
     */
    checkBorderCollision(minCol, maxCol, maxRow) {
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
    }

    /**
     * Check wheter there is a block below the active block.
     * @param {int} row The Row for the current block to check
     * @param {int} col The column for the current block to check
     */
    checkBlockCollision(row, col) {
        // Check if there is a block below an active block
        try {
            let signBelow = this.board[row+1][col];

            if (signBelow[0] != "*" &&
            signBelow != "") {
                this.hitBlock = true;
            }
        }
        catch {
            // TODO: Maybe move floor-collision here
        }

        // Check if there is a block to the left
        try {
            let signLeft = this.board[row][col-1];

            if (signLeft[0] != "*" &&
            signLeft != "") {
                this.hitLeftBlock = true;
            }
        } 
        catch {}

        // Check if there is a block to the right
        try {
            let signRight = this.board[row][col+1];

            if (signRight[0] != "*" &&
            signRight != "") {
                this.hitRightBlock = true;
            }
        } 
        catch {}
    }

    /**
     * Let the tetrimino fall at normal speed
     */
    gravity(forceRun=false) {
        this.fallTimer += deltaTime;
        if (this.fallTimer >= this.speed || forceRun) {
            // Kill tetri if hit block
            if (this.hitBlock) {
                this.killTetri();
                this.hitBlock = false;
                this.spawnTetri();
            }
            else {
                this.activeRow++;
            }
            this.fallTimer = 0;
        }
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
        // If dead on top; end game
        if (this.activeRow == 1) {
            this.endGame();
        }
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

        // Randomly spawn a new tetri that is not the same as the last one
        while (true) {
            let newTetri = random(this.possibleTetriminos);

            if (this.tetrimino != newTetri) {
                this.tetrimino = newTetri;
                break;
            }
            else {continue;}
        }
        
        this.checkRows();

        // Change spped to normal
        this.speed = this.currentSpeed;
    }

    /**
     * Updates the active Tetrimino
     * 
     * @param {string} tetri The Geometry to draw
     */
    activeTetri() {
        switch (this.tetrimino) {
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
     * End the game
     */
    endGame() {
        this.hasEnded = true;
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