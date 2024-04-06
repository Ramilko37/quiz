import './App.css'
import Survey from './components/Survey'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex w={'100%'} h={'100dvh'} background={'BgColor'} justify={'center'} alignItems={'center'}>
      <Survey />
    </Flex>
  )
}

export default App
