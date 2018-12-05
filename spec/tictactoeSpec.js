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

  it("checks to see if player1 has won", function() {
    game.makeMove("X", 0)
    game.makeMove("O", 1)
    game.makeMove("X", 4)
    game.makeMove("O", 7)
    game.makeMove("X", 8)
    expect(game.win()).toEqual("Player 1 wins!")
  })

  it("checks to see if player2 has won", function() {
    game.makeMove("X", 0)
    game.makeMove("O", 1)
    game.makeMove("X", 2)
    game.makeMove("O", 4)
    game.makeMove("X", 8)
    game.makeMove("O", 7)
    expect(game.win()).toEqual("Player 2 wins!")
  })

  it("resets the board after someone has won", function() {
    game.win()
    expect(game.board).toEqual(["", "", "", "", "", "", "", "", ""])
  })
})
