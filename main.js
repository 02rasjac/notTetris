// TODO: PREVENT COLLISION AND "OUT OF BOUNDS"
// TODO: LET THE TETRIMINOS FALL

let block;
let logic;

//! TESTING
let testActive = "I";

function setup() {
    createCanvas(200, 400);
    logic = new Logic();

    //! TESTING
    logic.spawnTetri(testActive);
}

function draw() {
    background(30);

    //! TESTING
    //* Has to ckeck board before updating the tetri
    logic.checkBoard();
    logic.activeTetri(testActive);
}

function keyPressed() {
    if (keyCode === 65) {
        // Rotate left;
        if (logic.rotation != 1) {
            logic.rotation--;
        }
        else {
            logic.rotation = 4;
        }
        logic.checkOutOfBounds();
    }
    else if (keyCode === 68) {
        // Rotate right;
        if (logic.rotation != 4) {
            logic.rotation++;
        }
        else {
            logic.rotation = 1;
        }
    }
    else if (keyCode === DOWN_ARROW) {
        // Move down
        logic.activeRow++;
    }
    else if (keyCode === LEFT_ARROW) {
        // Move left
        logic.activeCol--;
    }
    else if (keyCode === RIGHT_ARROW) {
        // Move right
        logic.activeCol++;
    }
}