import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import './App.css'
import { Onboarbing } from './views/Onboarbing'
import { Welcome } from './views/Welcome'

import { ApiGetRefreshToken, ApiGetSurvey } from './api/api'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Survey } from './components/Survey'
import { surveyData } from './data'
import Auth from './views/Auth'
import { Forms } from './views/Forms'

export enum PageState {
  Welcome,
  Onboarding,
  Auth,
  Forms,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Auth)
  const [data, setData] = useState(surveyData)
  const [authorised, setAuthorised] = useState<boolean>(true)

  const handlePageState = (pageState: PageState) => () => {
    setPageState(pageState)
  }

  const content = () => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Auth:
        return <Auth handlePageState={handlePageState} authorised={authorised} setAuthorised={setAuthorised} />
      case PageState.Onboarding:
        return <Onboarbing handlePageState={handlePageState} />
      case PageState.Forms:
        return <Forms handlePageState={handlePageState} />
      case PageState.Quiz:
        return <Survey stepData={data} />
    }
  }

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (authorised && token) {
      console.log(token)
      ApiGetSurvey(token).then(res => {
        console.log(res, 51)
        setData(res?.data.payload)
        setPageState(PageState.Quiz)
      })
    }
  }, [authorised])

  useEffect(() => {
    setInterval(() => {
      getRefreshToken()
    }, 300000)

    const getRefreshToken = async () => {
      await ApiGetRefreshToken()
        .then(res => {
          localStorage.setItem('token', res?.data.payload.access_token)
          document.cookie = `refresh_token=[${res?.data.payload.refresh_token}]`
        })
        .catch(err => console.error(err))
    }
  })

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
