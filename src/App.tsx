import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import './App.css'
import { Onboarbing } from './views/Onboarbing'
import { Welcome } from './views/Welcome'

import { ApiGetSurvey } from './api/api'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Survey } from './components/Survey'
import Auth from './views/Auth'

export enum PageState {
  Welcome,
  Auth,
  Onboarding,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Auth)
  const [data, setData] = useState()
  const [authorised, setAuthorised] = useState<boolean>(false)

  const handlePageState = (pageState: PageState) => () => {
    setPageState(pageState)
  }

  const content = () => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Auth:
        return <Auth handlePageState={handlePageState} setAuthorised={setAuthorised} />
      case PageState.Onboarding:
        return <Onboarbing handlePageState={handlePageState} />
      case PageState.Quiz:
        return <Survey stepData={data} />
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (authorised && token) {
      ApiGetSurvey(token).then(res => {
        setData(res?.data.payload)
        setPageState(PageState.Quiz)
      })
    }
  }, [authorised])

  console.log(data, 50)

  return (
    <Flex direction={'column'} w={'100%'} h={'100dvh'} background={'BgColor'} justify={'center'} alignItems={'center'}>
      {pageState === PageState.Welcome && <Header />}
      {content()}
      {pageState === PageState.Welcome && <Footer />}
    </Flex>
  )
}

export default App
