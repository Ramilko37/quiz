import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import { PageState } from 'src/App'
import { AuthForm } from 'src/components/AuthForm/AuthForm'
import QuizLogo from '../images/QuizLogo.svg'

export enum ShowedForm {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
}

interface LoginPageProps {
  initialScreen?: ShowedForm
  handlePageState: (pageState: PageState) => void
  setAuthorised: React.Dispatch<React.SetStateAction<boolean>>
}

export const Auth = ({ initialScreen = ShowedForm.SignIn, handlePageState, setAuthorised }: LoginPageProps) => {
  // const handleChangeForm = (newForm: ShowedForm) => () => {
  //   setShowedForm(newForm)
  // }

  // const isImageComponentHidden = isMobile && showedForm === ShowedForm.ResetPassword

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

      <Text fontWeight={600} fontSize={'20px'} color={'#fff'}>
        Join Networky, Expand Your Horizons!
      </Text>
      <AuthForm formType={'signup'} handlePageState={handlePageState} setAuthorised={setAuthorised} />
    </Flex>
  )
}

export default Auth
