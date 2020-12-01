class Score {
  /**
   * Controls the score-system
   */
  constructor() {
    // // Variables for points for each line at level zero
    // this.lines1 = 40;
    // this.lines2 = 100;
    // this.lines3 = 300;
    // this.lines4 = 1200;

    this.score = 0;

    // Points per number of lines removed, 1 line = [0], 4 lines = [3]
    this.linesPoints = [40, 100, 300, 1200];

    // Multiplier per level
    this.levelMultiplier = 0;
  }

  /**
   * Add score based on multipliers
   * @param {int} linesMultiplier The ammount of lines removed
   * @param {int} levelMultiplier The current level
   */
  addScore(linesMultiplier, levelMultiplier) {
    // points = 40 + 40n for one line, n = level
    // points = 100 + 100n for two lines
    // points = 300 + 30n for three lines
    // points = 1200 + 1200n for four lines

    let addPoints = 0;
    switch (linesMultiplier) {
      case 1:
        addPoints = 40 + 40 * levelMultiplier;
        break;
      case 2:
        addPoints = 100 + 100 * levelMultiplier;
        break;
      case 3:
        addPoints = 300 + 300 * levelMultiplier;
        break;
      case 4:
        addPoints = 1200 + 1200 * levelMultiplier;
        break;
      default:
        addPoints = 0;
        break;
    }

    this.score += addPoints;
  }
}
