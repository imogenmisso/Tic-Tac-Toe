$(document).ready(function() {
  var game = new Game();

  document.addEventListener("click", function(event) {
    if (game.currentPlayer() === "Player 1") {
      document.getElementById(event.target.id).innerHTML = "X"
      game.makeMove("X", event.target.id)
      if (game.win() === "Player 1 wins!") {
        $("#winner").text("Player 1 wins!")
      }
    } else {
      document.getElementById(event.target.id).innerHTML = "O"
      game.makeMove("O", event.target.id)
      if (game.win() === "Player 2 wins!") {
        $("#winner").text("Player 2 wins!")
      }
    }
    game.switchPlayer();
  })
})
