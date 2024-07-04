import { Flex, HStack, Image, Text } from '@chakra-ui/react'
import { PageState } from 'src/App'
import QuizLogo from '../images/QuizLogo.svg'

export enum ShowedForm {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
}

interface IFormsPageProps {
  handlePageState: (pageState: PageState) => void
}

export const Forms = ({ handlePageState }: IFormsPageProps) => {
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
    </Flex>
  )
}
