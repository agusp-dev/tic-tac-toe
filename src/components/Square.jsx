import { Flex, Text } from '@chakra-ui/react'

export const Square = ({ children }) => {
  return (
    <Flex 
      h='10rem' 
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
      <Text fontSize='5.5rem' fontWeight={600}>{ children }</Text>
    </Flex>
  )
}
