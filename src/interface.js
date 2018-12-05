$(document).ready(function() {
  var game = new Game();

  $("#board").click(function(event) {
    if (game.board[event.target.id] === "") {
      if (game.currentPlayer() === "Player 1") {
        document.getElementById(event.target.id).innerHTML = "X"
        game.makeMove("X", event.target.id)
        announceWinner("1")
      } else {
        document.getElementById(event.target.id).innerHTML = "O"
        game.makeMove("O", event.target.id)
        announceWinner("2")
      }
      game.switchPlayer();
    }})

  $("#restart").click(function() {
    game.resetGame();
    wipeBoard()
  })

  function announceWinner(player) {
    if (game.win() === `Player ${player} wins!`) {
      $("#winner").text(`Player ${player} wins!`)
      $("#restart").show();
      haltGame()
    } else if (game.draw() === true) {
        $("#winner").text("Draw!")
        $("#restart").show();
    }
  }

  function wipeBoard() {
    location.reload();
  }

  function haltGame() {
    for (var i=0; i<9; i++) {
      if (game.board[i] === "") {
        game.board[i] = "   "
      }
    }
  }
})
