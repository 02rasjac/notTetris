/**
 * Functions for rendering blocks
 */
class Blocks {
  constructor(logic) {}

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
   * Render the upcoming blocks
   */
  drawUpcomingBlocks() {
    let x = 350;
    let y = 20;
    logic.upcomingTetris.forEach((block) => {
      this.drawBlock(logic.tetriminos[block], x, y);
      y += 40;
    });
  }

  /**
   * Render the block that is hold
   */
  drawHeldBlock() {
    if (logic.heldTetris !== "") {
      let x = 50;
      let y = 20;
      this.drawBlock(logic.tetriminos[logic.heldTetris], x, y);
    }
  }

  /**
   * Generate tetriminos with blocks.
   * @param {array} blocks 2D-array with relative coordination to the rotation-point. [row, col]
   * @param {string} sign Character representing the color
   */
  generate(blocks, sign) {
    // Just in case sign is put in with an *
    sign = sign.length > 1 ? sign : `*${sign}`;
    sign = sign.toUpperCase();

    let isBlocked = false;

    // Collide
    for (let i = 0; i < blocks.length; i++) {
      let sign = "";

      // Collision with floor
      try {
        sign =
          logic.board[logic.activeRow + blocks[i][0]][
            logic.activeCol + blocks[i][1]
          ];
      } catch (error) {
        logic.activeRow--;
        logic.hitFloor = true;
        break;
      }

      // Stop rotation on blocks and walls
      if ((sign !== "" || sign === undefined) && logic.rotated !== "") {
        console.log("BLOCKED ON ROTATE");
        isBlocked = true;
        if (logic.rotated === "R") {
          logic.rotated = "";
          if (logic.rotation != 1) {
            logic.rotation--;
          } else {
            logic.rotation = 4;
          }
        } else if (logic.rotated === "L") {
          logic.rotated = "";
          if (logic.rotation != 4) {
            logic.rotation++;
          } else {
            logic.rotation = 1;
          }
        }
        break;
      }

      // Stop movement on walls and blocks
      if ((sign !== "" || sign === undefined) && logic.moved !== "") {
        console.log("BLOCKED ON MOVE");
        isBlocked = true;
        if (logic.moved === "L") logic.activeCol++;
        else if (logic.moved === "R") logic.activeCol--;
        logic.moved = "";
        break;
      }

      if (sign !== "") {
        console.log("BLOCKED ON BLOCK");
        isBlocked = true;
        logic.hitBlock = true;
        logic.activeRow--;
      }
    }

    // Generate the blocks if not blocked
    if (!isBlocked) {
      blocks.forEach((block) => {
        logic.board[logic.activeRow + block[0]][
          logic.activeCol + block[1]
        ] = sign;
      });
    }
  }

  /**
   * Make a straight tetrimino
   */
  i() {
    const sign = "I";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(0, 9, 17);
      position = [
        [0, 0],
        [1, 0],
        [-1, 0],
        [2, 0],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(2, 8, 18);
      position = [
        [1, 0],
        [1, -1],
        [1, 1],
        [1, -2],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 10, 17);
      position = [
        [0, -1],
        [1, -1],
        [-1, -1],
        [2, -1],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(2, 8, 19);
      position = [
        [0, 0],
        [0, -1],
        [0, 1],
        [0, -2],
      ];
    }

    this.generate(position, sign);
  }

  /**
   * Make a J-tetrimino
   */
  j() {
    const sign = "J";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(1, 8, 19);
      position = [
        [0, 0],
        [0, -1],
        [-1, -1],
        [0, 1],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(0, 8, 18);
      position = [
        [0, 0],
        [-1, 0],
        [-1, 1],
        [1, 0],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 8, 18);
      position = [
        [0, 0],
        [0, -1],
        [0, 1],
        [1, 1],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(1, 9, 18);
      position = [
        [0, 0],
        [-1, 0],
        [1, -1],
        [1, 0],
      ];
    }

    this.generate(position, sign);
  }

  /**
   * Make a L-tetrimino
   */
  l() {
    const sign = "L";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(1, 8, 19);
      position = [
        [0, 0],
        [0, -1],
        [-1, 1],
        [0, 1],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(0, 8, 18);
      position = [
        [0, 0],
        [-1, 0],
        [1, 1],
        [1, 0],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 8, 18);
      position = [
        [0, 0],
        [0, -1],
        [0, 1],
        [1, -1],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(1, 9, 18);
      position = [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [1, 0],
      ];
    }

    this.generate(position, sign);
  }

  /**
   * Render a square tetrimino
   */
  o() {
    const sign = "O";
    let position = [];
    //logic.checkBorderCollision(1, 9, 19);
    position = [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, -1],
    ];

    this.generate(position, sign);
  }

  /**
   * Make a S-tetrimino
   */
  s() {
    const sign = "S";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(1, 8, 19);
      position = [
        [0, 0],
        [0, -1],
        [-1, 0],
        [-1, 1],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(0, 8, 18);
      position = [
        [0, 0],
        [-1, 0],
        [0, 1],
        [1, 1],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 8, 18);
      position = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, -1],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(1, 9, 18);
      position = [
        [0, 0],
        [1, 0],
        [0, -1],
        [-1, -1],
      ];
    }

    this.generate(position, sign);
  }

  /**
   * Make a T-tetrimino
   */
  t() {
    const sign = "T";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(1, 8, 19);
      position = [
        [0, 0],
        [0, -1],
        [0, 1],
        [-1, 0],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(0, 8, 18);
      position = [
        [0, 0],
        [-1, 0],
        [1, 0],
        [0, 1],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 8, 18);
      position = [
        [0, 0],
        [0, 1],
        [0, -1],
        [1, 0],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(1, 9, 18);
      position = [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, -1],
      ];
    }

    this.generate(position, sign);
  }

  /**
   * Make a Z-tetrimino
   */
  z() {
    const sign = "Z";
    let position = [];
    if (logic.rotation == 1) {
      //logic.checkBorderCollision(1, 8, 19);
      position = [
        [0, 0],
        [0, 1],
        [-1, 0],
        [-1, -1],
      ];
    } else if (logic.rotation == 2) {
      //logic.checkBorderCollision(0, 8, 18);
      position = [
        [0, 0],
        [1, 0],
        [0, 1],
        [-1, 1],
      ];
    } else if (logic.rotation == 3) {
      //logic.checkBorderCollision(1, 8, 18);
      position = [
        [0, 0],
        [0, -1],
        [1, 0],
        [1, 1],
      ];
    } else if (logic.rotation == 4) {
      //logic.checkBorderCollision(1, 9, 18);
      position = [
        [0, 0],
        [0, -1],
        [1, -1],
        [-1, 0],
      ];
    }

    this.generate(position, sign);
  }
}
