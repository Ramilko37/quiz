import { Button, Flex, HStack, Image, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react'
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
  const [isEmailForm, setIsEmailForm] = useState<boolean>(true)
  const [emailFormValue, setEmailFormValue] = useState<string>('')
  const [numberInput, setNumberInput] = useState('')

  const handleEmailForm = async () => {
    console.log(emailFormValue)
    await ApiGetVeryficationCode(Number(emailFormValue))
      .then(res => {
        console.log(res, res?.data.payload.refresh_token)
        localStorage.setItem('token', res?.data.payload.access_token.token)
        document.cookie = `refresh_token=[${res?.data.payload.refresh_token.token}]`
        setAuthorised(true)
      })
      .catch(err => {
        console.error(err)
      })

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
          <Flex
            w={'100%'}
            borderRadius={'20px'}
            h={'64px'}
            bgColor={'#322C3B'}
            justify={'center'}
            alignItems={'center'}
          >
            <PinInput otp type="alphanumeric" onChange={e => setEmailFormValue(e)} placeholder="-">
              <PinInputField color={'#A3A3A3'} border={'none'} placeholder="-" />
              <PinInputField color={'#A3A3A3'} border={'none'} />
              <PinInputField color={'#A3A3A3'} border={'none'} />
              <PinInputField color={'#A3A3A3'} border={'none'} />
              <PinInputField color={'#A3A3A3'} border={'none'} />
              <PinInputField color={'#A3A3A3'} border={'none'} />
            </PinInput>
          </Flex>
        </Flex>
      )
    }
  }, [isEmailForm, authorised, handlePageState, setAuthorised])

  return (
    <Flex
      direction={'column'}
      w={{ base: '90%', md: '500px' }}
      h={'100%'}
      gap={'60px'}
      justify={'center'}
      align={'flex-start'}
      position={'relative'}
    >
      <HStack justify={'flex-start'}>
        <Image alignSelf={'baseline'} w={'176px'} h={'76px'} src={QuizLogo} />
      </HStack>
      <Flex w={'100%'} direction={'column'} gap={'16px'}>
        <Text fontFamily={'Montserrat'} fontWeight={600} fontSize={'20px'} color={'#fff'}>
          {isEmailForm ? 'Confirm your Email' : 'Join Networky, Expand Your Horizons!'}
        </Text>
        {isEmailForm && (
          <Text color={'#fff'}>
            Type in the code we sent to <a href={`mailto:${emailFormValue}`}>{emailFormValue}</a>. Edit email
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
        textAlign={'left'}
      >
        <Image src={PrivacyLogo} />
        <VStack alignItems={'flex-start'}>
          <Text w={'100%'} fontWeight={800} fontSize={'16px'} color={'#fff'}>
            Your privacy is important
          </Text>
          <Text fontWeight={400} fontSize={'16px'} color={'#fff'}>
            {' '}
            We may send you member updates, invitations, reminders and promotional messages from us and our partners.
            You can change your preferences anytime.
          </Text>
        </VStack>
      </Flex>

      <Text color={'#fff'} display={isEmailForm ? 'flex' : 'none'} fontWeight={600}>
        Didn't receive the link? &nbsp;{' '}
        <Text as={'span'} textDecor={'underline'}>
          {' '}
          Send again{' '}
        </Text>
      </Text>

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
