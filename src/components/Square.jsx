import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

export const Square = ({ children }) => {
  return (
    <Flex 
      h='7rem' 
      alignItems='center' 
      justifyContent='center'
      border='1px solid'
      borderColor='gray.300'
      borderRadius='.4rem'
      _hover={{
        bgColor: 'gray.50',
        cursor: 'pointer',
      }}
    >
      <Text fontSize='5rem' fontWeight={500}>{ children }</Text>
    </Flex>
  )
}

Square.propTypes = {
  children: PropTypes.node.isRequired,
}
