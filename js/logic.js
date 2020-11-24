class Logic {
  /**@var {bool} hitFloor A flag wheter the tetri collided with floor */
  hitFloor = false;

  /**@var {bool} hitBlock A flag wheter the tetri collided with another block */
  hitBlock = false;

  /**@var {int} startingSpeed The speed at which the game starts at */
  startingSpeed = 1000;

  fallTimer = 0;

  /**@var {bool} hasEnded Wheter the player lost or not */
  hasEnded = false;

  /**@var {int} totalRemovedLines The ammount of removed lines through the whole game */
  totalRemovedLines = 0;

  /**@var {int} level The current level the player is on */
  level = 0;

  /**@var {array} upcomingTetris The next four tetris */
  upcomingTetris = [];

  /**@var {string} heldTetris The tetrimino the player is holidng */
  heldTetris = "";

  /**@var {bool} heldThisRound True if hold a tetrimino this round to prevent continiously switching */
  heldThisRound = false;

  constructor() {
    // An object to reference colors
    this.tetriminos = {
      Z: color(255, 0, 0), // Red
      T: color(204, 0, 204), // Purple
      J: color(0, 0, 255), // Blue
      I: color(0, 255, 255), // Cyan
      S: color(0, 255, 0), // Green
      O: color(255, 255, 0), // Yellow
      L: color(255, 128, 0), // Orange
    };

    // Initilise the upcoming tetris
    for (let i = 0; i < 4; i++) {
      this.newTetri(true);
    }

    this.tetrimino = this.newTetri();

    // Create the board as an array
    this.reset();
    this.blocks = new Blocks(this);
    this.score = new Score();
    this.pc = new PlayerControl();
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
      let x = 100;
      for (let j = 0; j < this.board[i].length; j++) {
        // The logical sign of the color
        let sign = this.board[i][j];

        // If the sign is not empty; render it as a block
        if (sign != "") {
          this.blocks.drawBlock(
            this.tetriminos[sign[sign.length == 1 ? "0" : "1"]],
            x,
            y
          );

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
    let linesRemoved = 0;
    for (let i = this.board.length - 1; i >= 0; i--) {
      let numberOfBlocks = 0;
      let removed = false;

      for (let j = 0; j < this.board[i].length; j++) {
        let sign = this.board[i][j];

        // The row is not full; don't remove it
        if (sign === "") {
          break;
        } else {
          numberOfBlocks++;
        }

        // If row is full; Empty all collumns
        if (numberOfBlocks == this.board[i].length) {
          removed = this.removeRow(i);
          linesRemoved++;
        }
      }

      if (removed) {
        i++;
        removed = false;
      }
    }

    if (linesRemoved > 0) {
      this.score.addScore(linesRemoved, this.level);
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
          this.board[row][col] = this.board[row - 1][col];
        } catch {}
      }
    }

    // Increase level every 10th line removed
    this.totalRemovedLines++;
    if (this.totalRemovedLines % 10 === 0 && this.totalRemovedLines > 0) {
      this.level++;
      document.getElementById("level").innerHTML = this.level;
    }

    document.getElementById("lines").innerHTML = this.totalRemovedLines;

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
    } else if (this.activeCol > maxCol) {
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
      let signBelow = this.board[row + 1][col];

      if (signBelow[0] != "*" && signBelow != "") {
        this.hitBlock = true;
      }
    } catch {
      // TODO: Maybe move floor-collision here
    }

    // Check if there is a block to the left
    try {
      let signLeft = this.board[row][col - 1];

      if (signLeft[0] != "*" && signLeft != "") {
        this.hitLeftBlock = true;
      }
    } catch {}

    // Check if there is a block to the right
    try {
      let signRight = this.board[row][col + 1];

      if (signRight[0] != "*" && signRight != "") {
        this.hitRightBlock = true;
      }
    } catch {}
  }

  /**
   * Let the tetrimino fall at normal speed
   */
  gravity(forceRun = false) {
    this.fallTimer += deltaTime;
    if (this.fallTimer >= this.speed || forceRun) {
      // Kill tetri if hit block
      if (this.hitBlock) {
        this.killTetri();
        this.hitBlock = false;
        this.spawnTetri();
      } else {
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
        }
      }
    }

    // Set active tetrimino to the first upcoming tetrimino
    this.tetrimino = this.newTetri();
    this.heldThisRound = false;

    this.checkRows();

    // Change spped to normal
    this.speed = this.calculateSpeed();

    this.pc.isSmashing = false;
  }

  /**
   * Randomly generates a new tetri that is not the same as the one directly befor
   * @param {boolean} initial Set true if first time running, otherwise, ignore
   * @returns {string} The char representing a tetrimino
   */
  newTetri(initial = false) {
    let nextTetri;

    if (!initial) {
      nextTetri = this.upcomingTetris.shift();
    }

    let possibleTetriminos = Object.keys(this.tetriminos);
    // Filter out tetris that can not be chosen to optimize the while-loop
    let possibleUpcomings = possibleTetriminos.filter(
      (tetri) => !this.upcomingTetris.includes(tetri)
    );
    // Randomly spawn a new tetri that is not the same any of the upcoming tetriminos
    while (true) {
      let newTetri = random(possibleUpcomings);

      if (!this.upcomingTetris.includes(newTetri)) {
        this.upcomingTetris.push(newTetri);
        break;
      } else {
        continue;
      }
    }

    return nextTetri;
  }

  hold() {
    if (!this.heldThisRound) {
      if (this.heldTetris === "") {
        this.heldTetris = this.tetrimino;
        this.tetrimino = this.newTetri();
      } else {
        // Switch between held tetris and the current tetris
        let temp = this.tetrimino;
        this.tetrimino = this.heldTetris;
        this.heldTetris = temp;
      }
      this.heldThisRound = true;
    }
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
    this.speed = this.startingSpeed;
  }

  /** Calculate the speed based on the level */
  calculateSpeed = () => 1000 / (this.level / 2 + 1);
}
