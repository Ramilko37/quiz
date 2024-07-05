import { Button, Flex, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { PageState } from 'src/App'
import { ApiGetVeryficationCode } from 'src/api/api'
import { AuthForm } from 'src/components/AuthForm/AuthForm'
import QuizLogo from '../images/QuizLogo.svg'
import PrivacyLogo from '../images/privacyLogo.svg'

export enum ShowedForm {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
}

interface LoginPageProps {
  authorised: boolean
  handlePageState: (pageState: PageState) => () => void
  setAuthorised: React.Dispatch<React.SetStateAction<boolean>>
}

export const Auth = ({ authorised, handlePageState, setAuthorised }: LoginPageProps) => {
  const [isEmailForm, setIsEmailForm] = useState<boolean>(false)
  const [emailFormValue, setEmailFormValue] = useState<string>('')

  const handleEmailForm = async () => {
    console.log(emailFormValue)
    await ApiGetVeryficationCode(Number(emailFormValue))
      .then(res => {
        console.log(res, res?.data.payload.refresh_token)
        localStorage.setItem('token', res?.data.payload.access_token.token)
        document.cookie = `refresh_token=[${res?.data.payload.refresh_token.token}]`
        setAuthorised(true)
      })
      .catch(err => console.error(err))

    console.log('page state handled')
  }

  const formComponent = useMemo(() => {
    if (!isEmailForm) {
      return (
        <AuthForm
          formType={authorised ? 'signin' : 'signup'}
          handlePageState={handlePageState}
          setAuthorised={setAuthorised}
          setIsEmailForm={setIsEmailForm}
        />
      )
    } else {
      return (
        <Flex w={'100%'} direction={'column'} maxW={'500px'} gap={'16px'} align={'center'} textAlign={'left'}>
          <Input
            maxLength={6}
            type="number"
            placeholder="- - - - - -"
            _placeholder={{ textAlign: 'center' }}
            textAlign={'center'}
            onChange={e => setEmailFormValue(e.target.value)}
          />
        </Flex>
      )
    }
  }, [isEmailForm, authorised, handlePageState, setAuthorised])

  return (
    <Flex
      direction={'column'}
      w={'500px'}
      h={'100%'}
      gap={'40px'}
      justify={'center'}
      align={'flex-start'}
      position={'relative'}
    >
      <HStack justify={'flex-start'}>
        <Image alignItems={'flex-start'} w={'102px'} h={'44px'} src={QuizLogo} />
      </HStack>
      <Flex w={'100%'} direction={'column'} gap={'16px'}>
        <Text fontWeight={600} fontSize={'20px'} color={'#fff'}>
          {isEmailForm ? 'Confirm your Email' : 'Join Networky, Expand Your Horizons!'}
        </Text>
        {isEmailForm && (
          <Text color={'#fff'}>
            Type in the code we sent to <a href="mailto:golikart@gmail.com">golikart@gmail.com</a>. Edit email
          </Text>
        )}
      </Flex>
      {formComponent}

      <Flex
        display={isEmailForm ? 'flex' : 'none'}
        w={'100%'}
        border={'1px solid #969AC4'}
        p={'16px'}
        gap={'16px'}
        alignItems={'flex-start'}
      >
        <Image src={PrivacyLogo} />
        <VStack>
          <Text fontWeight={400} fontSize={'16px'} color={'#fff'}>
            Your privacy is important
          </Text>
          <Text fontWeight={400} fontSize={'16px'} color={'#fff'}>
            {' '}
            We may send you member updates, invitations, reminders and promotional messages from us and our partners.
            You can change your preferences anytime.
          </Text>
        </VStack>
      </Flex>

      <Text display={isEmailForm ? 'flex' : 'none'}>Didn't receive the link? Send again</Text>

      <Button
        display={isEmailForm ? 'flex' : 'none'}
        w={'100%'}
        h={'65px'}
        color={'#000'}
        bg={'#fff'}
        onClick={handleEmailForm}
      >
        Agree & Confirm
      </Button>
    </Flex>
  )
}

export default Auth
