import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'

export const IsTurnOf = ({ turn }) => {
  return (
    <Flex
      bgColor='gray.200'
      borderRadius='.4rem'
      px='1.4rem'
      py='.6rem' 
      gap='.6rem' 
      alignItems='center'
      justifyContent='center'
    >
      <Text
        fontSize='1.4rem' 
        fontWeight={600}
        color='gray.600'
      >
        Is the turn of:
      </Text>
      <Text
        fontSize='2.7rem' 
        fontWeight={600}
        color='gray.800'
      >
        { turn }
      </Text>
    </Flex>
  )
}

IsTurnOf.propTypes = {
  turn: PropTypes.string.isRequired,
}
