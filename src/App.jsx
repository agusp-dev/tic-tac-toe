import { useState } from 'react'
import { Container, Stack, Center, Button } from '@chakra-ui/react'
import { Head } from './components/Head'
import { Board } from './components/Board'
import { IsTurnOf } from './components/IsTurnOf'
import { INITIAL_BOARD, GAME_STATUS, INITIAL_TURN, TURN } from './constants'

export const App = () => {

  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PENDING)
  const [turn, setTurn] = useState(INITIAL_TURN)
  const [board, setBoard] = useState(INITIAL_BOARD)

  const resetGame = () => {
    setBoard(INITIAL_BOARD)
    setTurn(INITIAL_TURN)
  }

  const handleStartGame = () => {
    if (gameStatus === GAME_STATUS.PENDING) {
      setGameStatus(GAME_STATUS.STARTED)
    }
    resetGame()
  }

  const updateSquare = (squareIndex) => {

    if (board[squareIndex] !== null) return

    setBoard(currentBoard => {
      const newBoard = currentBoard
      newBoard[squareIndex] = turn
      return [...newBoard]
    })

    setTurn(currentTurn => currentTurn === TURN.X ? TURN.O : TURN.X)
  }

  const handleSquareClick = (squareIndex) => {
    console.log(squareIndex)
    updateSquare(squareIndex)
  }

  return (
    <Container maxW='2xl'>
      <Stack gap='1.4rem'>
        <Head />
        <Board 
          currentBoard={ board }
          onHandleClick={ handleSquareClick }
        />

        {gameStatus === GAME_STATUS.STARTED && (
          <IsTurnOf turn={ turn } />
        )}

        <Center>
          <Button 
            colorScheme='red' 
            w='12rem'
            onClick={ handleStartGame }
          >
            { gameStatus === GAME_STATUS.PENDING ? 'Start Game' : 'Reset Game' }
          </Button>
        </Center>
        
      </Stack>
    </Container>
  )
}
