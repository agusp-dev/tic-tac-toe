import { Stack, Heading } from '@chakra-ui/react'

export const Title = () => (
  <Stack pt='2rem' >
    <Heading
      as='h1' 
      textAlign='center' 
      fontSize='2.4rem' 
      color='gray.600'
      >
        Tic Tac Toe
    </Heading>
    <Heading
      textAlign='center' 
      fontSize='1.2rem'
      fontWeight={400} 
      color='gray.600'
    >
      The classic Tic Tac Toe game...
    </Heading>
  </Stack>
)
