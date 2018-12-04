function Game() {
  this.player = "Player 1"
}

Game.prototype.currentPlayer = function () {
  return this.player;
};
