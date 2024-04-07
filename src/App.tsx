import { useState } from 'react'
import './App.css'
import Survey from './components/Survey'
import { Flex } from '@chakra-ui/react'
import { Welcome } from './views/Welcome'

export enum PageState {
  Welcome,
  Onboarding,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Welcome)

  const handlePageState = (pageState: PageState) => {
    setPageState(pageState)
  }

  const content = () => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Onboarding:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Quiz:
        return <Survey />
    }
  }

  return (
    <Flex w={'100%'} h={'100dvh'} background={'BgColor'} justify={'center'} alignItems={'center'}>
      {content()}
    </Flex>
  )
}

export default App
