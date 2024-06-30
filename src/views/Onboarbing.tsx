import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { PageState } from 'src/App'
import QuizLogo from '../images/QuizLogo.svg'
import onboardingImg from '../images/onboardingImg.jpg'

interface IOnboarbingProps {
  handlePageState: (pageState: PageState) => () => void
}

export const Onboarbing = ({ handlePageState }: IOnboarbingProps) => {
  return (
    <Flex
      w={'100%'}
      h={'100dvh'}
      direction={'column'}
      justify={'space-between'}
      alignItems={'center'}
      p={'90px 0 90px'}
      gap={'40px'}
      maxW={'700px'}
    >
      <Image w={'176px'} h={'76px'} src={QuizLogo} />
      <Text fontSize={'14px'} fontWeight={600} color={'#fff'}>
        👋 Welcome to FP&A Community powered by Networky, a web service designed to facilitate casual meetings among
        professionals!
      </Text>
      <Image src={onboardingImg} w={'265px'} h={'266px'} />
      <Text color={'#fff'}>
        <Text color={'#DD7C66'} as={'span'}>
          Every week
        </Text>
        , we will provide you with the opportunity to meet an interesting person, chosen from our community members. ✨ 
        To participate in these meetings, please answer some questions. This will allow us to match you with the
        relevant professionals within the community.  We're here to{' '}
        <Text color={'#DD7C66'} as={'span'}>
          champion your career aspirations
        </Text>{' '}
        and make your professional advancement a reality!
      </Text>
      <Button onClick={handlePageState(PageState.Auth)} w={'250px'} h={'65px'} variant={'secondary'}>
        Let's go! 🚀
      </Button>
    </Flex>
  )
}
