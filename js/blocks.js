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
   * Make a straight tetrimino
   */
  i() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(0, 9, 17);
      logic.board[logic.activeRow][logic.activeCol] = "*I";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*I";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*I";
      logic.board[logic.activeRow + 2][logic.activeCol] = "*I";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(2, 8, 18);
      logic.board[logic.activeRow + 1][logic.activeCol] = "*I";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*I";
      logic.board[logic.activeRow + 1][logic.activeCol + 1] = "*I";
      logic.board[logic.activeRow + 1][logic.activeCol - 2] = "*I";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 10, 17);
      logic.board[logic.activeRow][logic.activeCol - 1] = "*I";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*I";
      logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*I";
      logic.board[logic.activeRow + 2][logic.activeCol - 1] = "*I";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(2, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*I";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*I";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*I";
      logic.board[logic.activeRow][logic.activeCol - 2] = "*I";
    }
  }

  /**
   * Make a J-tetrimino
   */
  j() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(1, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*J";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*J";
      logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*J";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*J";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(0, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*J";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*J";
      logic.board[logic.activeRow - 1][logic.activeCol + 1] = "*J";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*J";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*J";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*J";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*J";
      logic.board[logic.activeRow + 1][logic.activeCol + 1] = "*J";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(1, 9, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*J";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*J";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*J";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*J";
    }
  }

  /**
   * Make a L-tetrimino
   */
  l() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(1, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*L";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*L";
      logic.board[logic.activeRow - 1][logic.activeCol + 1] = "*L";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*L";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(0, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*L";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*L";
      logic.board[logic.activeRow + 1][logic.activeCol + 1] = "*L";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*L";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*L";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*L";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*L";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*L";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(1, 9, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*L";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*L";
      logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*L";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*L";
    }
  }

  /**
   * Render a square tetrimino
   */
  o() {
    logic.checkBorderCollision(1, 9, 19);
    logic.board[logic.activeRow][logic.activeCol] = "*O";
    logic.board[logic.activeRow - 1][logic.activeCol] = "*O";
    logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*O";
    logic.board[logic.activeRow][logic.activeCol - 1] = "*O";
  }

  /**
   * Make a S-tetrimino
   */
  s() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(1, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*S";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*S";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*S";
      logic.board[logic.activeRow - 1][logic.activeCol + 1] = "*S";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(0, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*S";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*S";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*S";
      logic.board[logic.activeRow + 1][logic.activeCol + 1] = "*S";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*S";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*S";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*S";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*S";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(1, 9, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*S";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*S";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*S";
      logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*S";
    }
  }

  /**
   * Make a T-tetrimino
   */
  t() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(1, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*T";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*T";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*T";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*T";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(0, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*T";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*T";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*T";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*T";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*T";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*T";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*T";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*T";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(1, 9, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*T";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*T";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*T";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*T";
    }
  }

  /**
   * Make a Z-tetrimino
   */
  z() {
    if (logic.rotation == 1) {
      logic.checkBorderCollision(1, 8, 19);
      logic.board[logic.activeRow][logic.activeCol] = "*Z";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*Z";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*Z";
      logic.board[logic.activeRow - 1][logic.activeCol - 1] = "*Z";
    } else if (logic.rotation == 2) {
      logic.checkBorderCollision(0, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*Z";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*Z";
      logic.board[logic.activeRow][logic.activeCol + 1] = "*Z";
      logic.board[logic.activeRow - 1][logic.activeCol + 1] = "*Z";
    } else if (logic.rotation == 3) {
      logic.checkBorderCollision(1, 8, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*Z";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*Z";
      logic.board[logic.activeRow + 1][logic.activeCol] = "*Z";
      logic.board[logic.activeRow + 1][logic.activeCol + 1] = "*Z";
    } else if (logic.rotation == 4) {
      logic.checkBorderCollision(1, 9, 18);
      logic.board[logic.activeRow][logic.activeCol] = "*1";
      logic.board[logic.activeRow][logic.activeCol - 1] = "*1";
      logic.board[logic.activeRow + 1][logic.activeCol - 1] = "*1";
      logic.board[logic.activeRow - 1][logic.activeCol] = "*1";
    }
  }
}
