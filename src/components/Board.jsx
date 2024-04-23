import { SimpleGrid } from '@chakra-ui/react'
import { Square } from './Square'

export const Board = () => {

  const board = Array(9).fill(null)


  return (
    <SimpleGrid columns={3} spacing={6}>
      {board?.map((square, index) => (
        <Square key={ index }>
          { index }
        </Square>
      ))}
    </SimpleGrid>
  )
}
