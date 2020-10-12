// TODO: PREVENT COLLISION AND "OUT OF BOUNDS"
//      MAKE A COPY OF THE BOARD BEFORE MOVING THE, 
//      IF THERE ISN'T FOUR ASTERISKS IN THE UPDATED VERSION;
//          REVERT TO THE OLD; ELSE UPDATE
//      IF THE ACTIVE TETRIMINO COLLIDES WITH AN EXISTING TETRIMINO IN 
//      THE NEW VERSION;
//          REVERT TO THE OLD; ELSE UPDATE
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
    logic.activeTetri(testActive);

    logic.checkBoard();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        // Rotate left;
        if (logic.rotation != 1) {
            logic.rotation--;
        }
        else {
            logic.rotation = 4;
        }
    }
    else if (keyCode === RIGHT_ARROW) {
        // Rotate right;
        if (logic.rotation != 4) {
            logic.rotation++;
        }
        else {
            logic.rotation = 1;
        }
    }
    console.log(logic.activeCol);
}

//! ======================
//! ------DO NOT USE------
//! ======================
function drawBackground() {
    // Draw the background as columns
    for (let x = 0; x < 200; x+20) {
        strokeWeight(20);
        if (x = 20) {
            stroke(0);
            line(x, 0, x, height);
        }
        else {
            stroke(50);
            line(x, 0, x, height);
        }  
    }
}