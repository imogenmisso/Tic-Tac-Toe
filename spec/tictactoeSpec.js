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
})
