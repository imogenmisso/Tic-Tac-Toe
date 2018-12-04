function Game() {
  this.player = "Player 1";
  this.moveCounter = 0;
}

Game.prototype.currentPlayer = function () {
  return this.player;
};

Game.prototype.switchPlayer = function() {
  if (this.player === "Player 1") {
    this.player = "Player 2"
  } else {
    this.player = "Player 1"
  }
  this.moveCounter++
}
