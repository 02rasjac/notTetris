let logic;
let smash = false;
let timeID_moveDown;

function setup() {
  createCanvas(400, 400);
  logic = new Logic();

  logic.spawnTetri();
}

function draw() {
  background(45);
  strokeWeight(2);
  line(100, 0, 100, 400);
  line(300, 0, 300, 400);
  strokeWeight(1);

  if (logic.hasEnded) {
    textSize(32);
    fill(255, 255, 255);
    text("GAME OVER", 100, height / 2);
  } else {
    //* Has to ckeck board before updating the tetri
    logic.checkBoard();
    logic.blocks.drawUpcomingBlocks();
    logic.blocks.drawHeldBlock();

    logic.activeTetri();

    logic.gravity();

    // Write score etc. to the DOM.
    document.getElementById("lines").innerHTML = logic.totalRemovedLines;
    document.getElementById("level").innerHTML = logic.level;
    document.getElementById("score").innerHTML = logic.score.score;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      logic.pc.rotateLeft();
      break;
    case 68:
      logic.pc.rotateRight();
      break;
    case DOWN_ARROW:
      logic.pc.moveDown();
      timeID_moveDown = setTimeout(function () {
        logic.speed = 50;
      }, 150);
      break;
    case LEFT_ARROW:
      logic.pc.moveLeft();
      break;
    case RIGHT_ARROW:
      logic.pc.moveRight();
      break;
    case 32:
      logic.pc.smash();
      break;
    case SHIFT:
      logic.hold();
      break;
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    clearTimeout(timeID_moveDown);
    logic.speed = logic.calculateSpeed();
  }
}
