export const INITIAL_BOARD = () => Array(9).fill(null)
export const INITIAL_TURN = () => TURN.O

export const TURN = {
  X: 'X',
  O: 'O',
}

export const GAME_STATUS = {
  PENDING: 'PENDING',
  STARTED: 'STARTED',
  FINISHED: 'FINISHED'
}

export const WINNING_MOVES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],

  [0, 4, 8],
  [3, 4, 6]
]
