import { Container, Stack } from '@chakra-ui/react'
import { Title } from './components/Title'
import { Board } from './components/Board'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <Container maxW='2xl'>
      <Stack gap='1.4rem'>
        <Title />
        <Board />
        <Footer />
      </Stack>
    </Container>
  )
}
