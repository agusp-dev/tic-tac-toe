import { useState } from 'react'
import { Container, Stack, Center, Button, useDisclosure } from '@chakra-ui/react'
import { Head } from './components/Head'
import { Board } from './components/Board'
import { IsTurnOf } from './components/IsTurnOf'
import { SuccessModal } from './components/SuccessModal'
import { INITIAL_BOARD, GAME_STATUS, INITIAL_TURN, TURN, WINNING_MOVES } from './constants'

export const App = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

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

  const isCurrentTurnWin = (turn, board) => {
    for (const move of WINNING_MOVES) {
      const [a, b, c] = move
      if (board[a] === turn && 
        board[b] === turn &&
        board[c] === turn) {
          console.log('You Win!')
          return true
        }
    }
    return false
  }

  const getNewBoard = (squareIndex) => {
    const newBoard = [...board]
    newBoard[squareIndex] = turn
    return newBoard
  }

  const checkIsCurrentTurnWin = (newBoard) => {
    if ( isCurrentTurnWin(turn, newBoard) ) {
      onOpen()
    } else {
      setTurn(currentTurn => currentTurn === TURN.X ? TURN.O : TURN.X)
    }
  }

  const processTurnMovement = (squareIndex) => {

    if (gameStatus !== GAME_STATUS.STARTED || board[squareIndex] !== null) return

    const newBoard = getNewBoard(squareIndex)
    setBoard(newBoard)

    checkIsCurrentTurnWin(newBoard)
  }

  const handleSquareClick = (squareIndex) => {
    processTurnMovement(squareIndex)
  }

  const handleSuccessModalClose = () => {
    resetGame()
    onClose()
  }

  return (
    <>
      <Container maxW='lg'>
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
      <SuccessModal 
        isOpen={ isOpen } 
        onClose={ handleSuccessModalClose } 
        turn={ turn } 
      />
    </>
  )
}
