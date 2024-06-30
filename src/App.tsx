import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Survey from './components/Survey'
import { Onboarbing } from './views/Onboarbing'
import { Welcome } from './views/Welcome'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Auth from './views/Auth'

export enum PageState {
  Welcome,
  Auth,
  Onboarding,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Auth)

  const handlePageState = (pageState: PageState) => () => {
    setPageState(pageState)
  }

  const content = () => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Auth:
        return <Auth handlePageState={handlePageState} />
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
