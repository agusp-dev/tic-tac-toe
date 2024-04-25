import PropTypes from 'prop-types'
import { SimpleGrid } from '@chakra-ui/react'
import { Square } from './Square'

export const Board = ({ currentBoard, onHandleClick }) => (
  <SimpleGrid columns={3} spacing={4}>
    {currentBoard?.map((square, index) => (
      <div key={ index } onClick={ () => onHandleClick(index) }>
        <Square>
          {square ?? ''}
        </Square>
      </div>
    ))}
    </SimpleGrid>
)

Board.propTypes = {
  currentBoard: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHandleClick: PropTypes.func.isRequired
}
