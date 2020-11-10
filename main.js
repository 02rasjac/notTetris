// TODO: PREVENT COLLISION AND "OUT OF BOUNDS"
//* TODO: LET THE TETRIMINOS FALL

let logic;
let smash = false;
let timeID_moveDown;

function setup() {
    createCanvas(200, 400);
    logic = new Logic();
    pc = new PlayerControl(logic);

    //! TESTING
    logic.spawnTetri();
}

function draw() {
    background(30);

    if (logic.hasEnded) {
        textSize(32);
        fill(255, 255, 255);
        text("GAME OVER", 0, height/2);
    }
    else {
        //! TESTING
        //* Has to ckeck board before updating the tetri
        logic.checkBoard();

        logic.activeTetri();

        logic.gravity();
    }
}

function keyPressed() {
    if (keyCode === 65) {
        pc.rotateLeft();
    }
    else if (keyCode === 68) {
        pc.rotateRight();
    }
    else if (keyCode === DOWN_ARROW) {
        pc.moveDown();
        timeID_moveDown = setTimeout(
            function () {logic.speed = 50;}, 150
        );
    }
    else if (keyCode === LEFT_ARROW) {
        pc.moveLeft();
    }
    else if (keyCode === RIGHT_ARROW) {
        pc.moveRight();
    }
}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        clearTimeout(timeID_moveDown);
        logic.speed = logic.currentSpeed;
    }
}