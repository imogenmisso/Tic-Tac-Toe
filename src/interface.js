$(document).ready(function() {
  var game = new Game();

  document.addEventListener("click", function(event) {
    if (game.currentPlayer() === "Player 1") {
      document.getElementById(event.target.id).innerHTML = "X"
      game.makeMove("X", event.target.id)
    } else {
      document.getElementById(event.target.id).innerHTML = "O"
      game.makeMove("O", event.target.id)
    }
    game.switchPlayer();
  })
})
