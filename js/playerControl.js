class PlayerControl {
  isSmashing = false;

  constructor(logic) {}
  /**
   * Move the tetrimino to the Left
   */
  moveLeft() {
    if (!logic.hitLeftBlock && !this.isSmashing) {
      logic.activeCol--;
    }
    logic.hitLeftBlock = false;
  }

  /**
   * Move the tetrimino to the Right
   */
  moveRight() {
    if (!logic.hitRightBlock && !this.isSmashing) {
      logic.activeCol++;
    }
    logic.hitRightBlock = false;
  }

  /**
   * Move the tetrimino down different ways
   */
  moveDown() {
    logic.gravity(true);
    // Minimum speed is 18, lower than that would break the blockcollision
    // if (smash) {logic.speed = 18;}
    // else {smash = true;}
    // setTimeout(function () {smash = false;}, 200);
  }

  /**
   * Lock rotation and x-movement and increase speed
   */
  smash() {
    logic.speed = 18;
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
  }
}
