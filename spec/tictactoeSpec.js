describe("TicTacToe", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("Player one makes first", function() {
    expect(game.currentPlayer()).toEqual("Player 1")
  })
})
