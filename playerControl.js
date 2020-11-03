class PlayerControl {
    constructor(logic) {

    }
    /**
     * Move the tetrimino to the Left
     */
    moveLeft() {
        if (!logic.hitLeftBlock) {
            logic.activeCol--;
        }
        logic.hitLeftBlock = false;
    }

    /**
     * Move the tetrimino to the Right
     */
    moveRight() {
        if (!logic.hitRightBlock) {
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
        if (smash) {logic.speed = 18;}
        else {smash = true;}
        setTimeout(function () {smash = false;}, 200);
    }

    /**
     * Rotate the active tetri to the left
     */
    rotateLeft() {
        if (logic.rotation != 1) {
            logic.rotation--;
        }
        else {
            logic.rotation = 4;
        }
    }

    /**
     * Rotate the active tetri to the right
     */
    rotateRight() {
        if (logic.rotation != 4) {
            logic.rotation++;
        }
        else {
            logic.rotation = 1;
        }
    }
}