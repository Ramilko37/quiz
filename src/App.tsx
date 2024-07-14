import { Flex } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import './App.css'
import { ApiGetRefreshToken, ApiGetSurvey } from './api/api'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu'
import { Quiz } from './components/Quiz'
import { quizData } from './data'
import Auth from './views/Auth'
import { Forms } from './views/Forms'
import { Onboarbing } from './views/Onboarbing'
import { Welcome } from './views/Welcome'

export enum PageState {
  Welcome,
  Onboarding,
  Auth,
  Forms,
  Quiz,
}

function App() {
  const [pageState, setPageState] = useState<PageState>(PageState.Welcome)
  const [data, setData] = useState(quizData)
  const [authorised, setAuthorised] = useState<boolean>(false)
  const [headerMenuOpen, setHeaderMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (authorised) {
      setPageState(PageState.Forms)
    }
  }, [authorised])

  const handlePageState = (pageState: PageState) => () => {
    setPageState(pageState)
    console.log(pageState, 'handled', 34)
  }

  const content = useMemo(() => {
    switch (pageState) {
      case PageState.Welcome:
        return <Welcome handlePageState={handlePageState} />
      case PageState.Auth:
        return <Auth handlePageState={handlePageState} authorised={authorised} setAuthorised={setAuthorised} />
      case PageState.Onboarding:
        return <Onboarbing handlePageState={handlePageState} />
      case PageState.Forms:
        return <Forms setPageState={setPageState} />
      case PageState.Quiz:
        return <Quiz quizData={quizData} />
      default:
        return <></>
    }
  }, [pageState])

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (authorised && token) {
      console.log(token)
      ApiGetSurvey(token).then(res => {
        console.log(res, 51)
        setData(res?.data.payload)
        setPageState(PageState.Forms)
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

  const handleHeaderMenuOpen = () => {
    setHeaderMenuOpen(true)
  }

  console.log(headerMenuOpen)

  return (
    <>
      <Flex
        direction={'column'}
        w={'100%'}
        h={{ base: '100dvh', md: '' }}
        background={'#091223'}
        justify={'center'}
        alignItems={'center'}
        overflow={'scroll'}
      >
        {pageState === PageState.Welcome && <Header handleHeaderMenuOpen={handleHeaderMenuOpen} />}
        {content}
        {pageState === PageState.Welcome && <Footer />}
      </Flex>

      {headerMenuOpen && createPortal(<HeaderMenu onClose={() => setHeaderMenuOpen(false)} />, document.body)}
    </>
  )
}

export default App
