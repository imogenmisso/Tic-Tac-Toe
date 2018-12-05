function Game() {
  this.player = "Player 1";
  this.board = ["", "", "", "", "", "", "", "", ""];
  this.moveCounter = 0;
  this.wins = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["3", "4", "5"],
      ["0", "4", "8"],
      ["6", "4", "2"]
    ]
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
}

Game.prototype.makeMove = function(player, square) {
  this.board[square] = player
  console.log(this.board)
  this.moveCounter++
}

Game.prototype.resetGame = function() {
  this.board = ["", "", "", "", "", "", "", "", ""];
  this.player = "Player 1"
}

Game.prototype.win = function() {
  for (var i in this.wins) {
    var sequence = this.wins[i];
    var combination = this.board[sequence[0]] + this.board[sequence[1]] + this.board[sequence[2]];
    if (combination === "XXX") {
      return "Player 1 wins!"
    } else if (combination === "OOO") {
      return "Player 2 wins!"
    }
  }
}
