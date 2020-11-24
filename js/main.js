// TODO: PREVENT COLLISION AND "OUT OF BOUNDS"
//* TODO: LET THE TETRIMINOS FALL

let logic;
let smash = false;
let timeID_moveDown;

function setup() {
  createCanvas(400, 400);
  logic = new Logic();
  // pc = new PlayerControl(logic);

  //! TESTING
  logic.spawnTetri();
}

function draw() {
  background(30);

  if (logic.hasEnded) {
    textSize(32);
    fill(255, 255, 255);
    text("GAME OVER", 100, height / 2);
  } else {
    //! TESTING
    //* Has to ckeck board before updating the tetri
    logic.checkBoard();
    logic.blocks.drawUpcomingBlocks();
    logic.blocks.drawHeldBlock();

    logic.activeTetri();

    logic.gravity();
  }
}

function keyPressed() {
  if (keyCode === 65) {
    logic.pc.rotateLeft();
  } else if (keyCode === 68) {
    logic.pc.rotateRight();
  } else if (keyCode === DOWN_ARROW) {
    logic.pc.moveDown();
    timeID_moveDown = setTimeout(function () {
      logic.speed = 50;
    }, 150);
  } else if (keyCode === LEFT_ARROW) {
    logic.pc.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    logic.pc.moveRight();
  } else if (keyCode === 32) {
    logic.pc.smash();
  } else if (keyCode === SHIFT) {
    logic.hold();
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    clearTimeout(timeID_moveDown);
    logic.speed = logic.calculateSpeed();
  }
}
