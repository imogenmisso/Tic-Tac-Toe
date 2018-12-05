$(document).ready(function() {
  var game = new Game();

  $("#board").click(function(event) {
    if (game.board[event.target.id] === "") {
      if (game.currentPlayer() === "Player 1") {
        document.getElementById(event.target.id).innerHTML = "X"
        game.makeMove("X", event.target.id)
        if (game.win() === "Player 1 wins!") {
          $("#winner").text("Player 1 wins!")
          showButton()
        }
      } else {
        document.getElementById(event.target.id).innerHTML = "O"
        game.makeMove("O", event.target.id)
        if (game.win() === "Player 2 wins!") {
          $("#winner").text("Player 2 wins!")
          showButton()
        }
      }
      game.switchPlayer();
    }})

  $("#restart").click(function() {
    game.resetGame();
    wipeBoard()
  })

  function showButton() {
    $("#restart").show();
  }

  function wipeBoard() {
    location.reload();
  }
})
