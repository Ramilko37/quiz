import { useState } from 'react'
import './App.css'
import Survey from './components/Survey'
import { Flex, HStack, Link, Image, Text } from '@chakra-ui/react'
import { Welcome } from './views/Welcome'
import { Onboarbing } from './views/Onboarbing'

import { IoChatboxEllipses } from 'react-icons/io5'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export enum PageState {
  Welcome,
  Onboarding,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Welcome)

  const handlePageState = (pageState: PageState) => () => {
    setPageState(pageState)
  }

  const content = () => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Onboarding:
        return <Onboarbing handlePageState={handlePageState} />
      case PageState.Quiz:
        return <Survey />
    }
  }

  return (
    <Flex direction={'column'} w={'100%'} h={'100dvh'} background={'BgColor'} justify={'center'} alignItems={'center'}>
      {pageState === PageState.Welcome && <Header />}
      {content()}
      {pageState === PageState.Welcome && <Footer />}
    </Flex>
  )
}

export default App
