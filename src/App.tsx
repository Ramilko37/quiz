import './App.css'
import Survey from './components/Survey'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Flex w={'100%'} h={'100%'} background={'BgColor'} justify={'center'} alignItems={'center'}>
        <Survey />
      </Flex>
    </div>
  )
}

export default App
