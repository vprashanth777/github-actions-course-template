const Game = require('../src/game').default

describe('Game', () => {
  let game, p1, p2
  beforeEach(() => {
    p1 = 'Salem'
    p2 = 'Nate'
    game = new Game(p1, p2)
  })

  describe('Game', () => {
    it('Initializes with two players', async () => {
      expect(game.p1).toBe('Salem')
      expect(game.p2).toBe('Nate')
    })

    it('Initializes with an empty board', async () => {
      for (let r = 0; r < game.board.length; r++) {
        for (let c = 0; c < game.board[r].lenght; c++) {
          expect(game.board[r][c]).toBeUndefined()
        }
      }
    })

    it('Starts the game with a random player', async () => {
      Math.random = () => 0.4
      expect(new Game(p1, p2).player).toBe('Salem')

      Math.random = () => 0.6
      expect(new Game(p1, p2).player).toBe('Nate')
    })
  })

  describe('turn', () => {
    it("Inserts an 'X' into the top center", async () => {
      game.turn(0, 1)
      expect(game.board[0][1]).toBe('X')
    })

    it("Inserts an 'X' into the top left", async () => {
      game.turn(0)
      expect(game.board[0][0]).toBe('X')
    })
  })

  describe('nextPlayer', () => {
    it('Sets the current player to be whoever it is not', async () => {
      Math.random = () => 0.4
      const game = new Game(p1, p2)
      expect(game.player).toBe('Salem')
      game.nextPlayer()
      expect(game.player).toBe('Nate')
    })
  })
})
