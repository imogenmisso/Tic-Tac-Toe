$(document).ready(function() {
  var game = new Game();

  document.addEventListener("click", function(event) {
    console.log(event.target.id)
    if (game.currentPlayer() === "Player 1") {
      document.getElementById(event.target.id).innerHTML = "X"
    } else {
      document.getElementById(event.target.id).innerHTML = "O"
    }
    game.switchPlayer();
  })
})
