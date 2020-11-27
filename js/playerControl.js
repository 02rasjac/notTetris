class PlayerControl {
  isSmashing = false;

  constructor(logic) {}
  /**
   * Move the tetrimino to the Left
   */
  moveLeft() {
    if (!this.isSmashing) {
      logic.rotated = "";
      logic.moved = "L";
      logic.activeCol--;
    }
  }

  /**
   * Move the tetrimino to the Right
   */
  moveRight() {
    if (!this.isSmashing) {
      logic.rotated = "";
      logic.moved = "R";
      logic.activeCol++;
    }
  }

  /**
   * Move the tetrimino down different ways
   */
  moveDown() {
    logic.gravity(true);
  }

  /**
   * Lock rotation and x-movement and increase speed
   */
  smash() {
    //* The fastest possible to not break collision
    logic.speed = 14;
    this.isSmashing = true;
  }

  /**
   * Rotate the active tetri to the left
   */
  rotateLeft() {
    if (logic.rotation != 1) {
      logic.rotation--;
    } else {
      logic.rotation = 4;
    }

    logic.moved = "";
    logic.rotated = "L";
  }

  /**
   * Rotate the active tetri to the right
   */
  rotateRight() {
    if (logic.rotation != 4) {
      logic.rotation++;
    } else {
      logic.rotation = 1;
    }

    logic.moved = "";
    logic.rotated = "R";
  }
}
