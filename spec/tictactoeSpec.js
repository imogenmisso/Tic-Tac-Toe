describe("TicTacToe", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("Player one makes first", function() {
    expect(game.currentPlayer()).toEqual("Player 1")
  })

  it("switches players after one move", function() {
    game.switchPlayer()
    expect(game.currentPlayer()).toEqual("Player 2")
  })

  it("starts with an empty board", function() {
    expect(game.board).toEqual(["", "", "", "", "", "", "", "", ""])
  })

  it("inputs the move to the board at the correct position", function() {
    game.makeMove("X", 2)
    expect(game.board).toEqual(["", "", "X", "", "", "", "", "", ""])
  })
})
