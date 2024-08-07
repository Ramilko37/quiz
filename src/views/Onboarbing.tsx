import { Button, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { PageState } from 'src/App'
import QuizLogo from '../images/QuizLogo.svg'
import onboardingImg from '../images/onboardingImg.jpg'

interface IOnboarbingProps {
  handlePageState: (pageState: PageState) => () => void
}

export const Onboarbing = ({ handlePageState }: IOnboarbingProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const TextContent = !isMobile ? (
    <Flex w={'100%'} direction={'column'} gap={'16px'}>
      <Text color={'#fff'}>
        <Text color={'#DD7C66'} as={'span'}>
          Every week
        </Text>
        , we will provide you with the opportunity to meet an interesting person, chosen from our community members. ✨ 
      </Text>
      <Text color={'#fff'}>
        To participate in these meetings, please answer some questions. This will allow us to match you with the
        relevant professionals within the community. 
      </Text>
      <Text color={'#fff'}>
        We're here to{' '}
        <Text color={'#DD7C66'} as={'span'}>
          champion your career aspirations
        </Text>{' '}
        <Text color={'#fff'}> and make your professional advancement a reality!</Text>{' '}
      </Text>
    </Flex>
  ) : (
    <Text color={'#fff'}>
      <Text color={'#DD7C66'} as={'span'}>
        Every week
      </Text>
      , we will provide you with the opportunity to meet an interesting person, chosen from our community members. ✨ 
      We're here to{' '}
      <Text color={'#DD7C66'} as={'span'}>
        champion your career aspirations
      </Text>{' '}
      and make your professional advancement a reality!
    </Text>
  )

  return (
    <Flex
      w={'100%'}
      direction={'column'}
      justify={'space-between'}
      alignItems={'center'}
      p={{ base: '45px', md: '90px 0 90px' }}
      gap={'40px'}
      maxW={{ base: '80vw', md: '500px' }}
      h={'100dvh'}
    >
      <Image alignSelf={'baseline'} w={'176px'} h={'76px'} src={QuizLogo} />
      <Text fontSize={'14px'} fontWeight={600} color={'#fff'}>
        👋 Welcome to FP&A Community powered by Networky, a web service designed to facilitate casual meetings among
        professionals!
      </Text>
      <Image src={onboardingImg} w={'265px'} h={'266px'} />
      {TextContent}
      <Button onClick={handlePageState(PageState.Auth)} w={'100%'} h={'65px'} variant={'secondary'}>
        Let's go! 🚀
      </Button>
    </Flex>
  )
}
