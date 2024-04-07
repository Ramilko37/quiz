import { Flex, Image, HStack, Link, Heading, Button } from '@chakra-ui/react'
import QuizLogo from '../images/QuizLogo.svg'
import quizBgImage from '../images/quizBgImage.jpg'
import { PageState } from 'src/App'

interface IWelcomeProps {
  handlePageState: (pageState: PageState) => void
}

export const Welcome = ({ handlePageState }: IWelcomeProps) => {
  return (
    <Flex w={'100%'} h={'100%'} direction={'column'}>
      <Flex
        position={'absolute'}
        top={0}
        left={0}
        w={'100%'}
        h={'100%'}
        backgroundImage={quizBgImage}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        opacity={'0.5'}
      />
      <Flex
        zIndex={100}
        padding={'30px 90px 30px'}
        w={'100%'}
        h={'fit-content'}
        justify={'space-between'}
        bg={'transparent'}
      >
        <Image src={QuizLogo} />
        <HStack gap={'30px'}>
          <Link fontSize={'23px'} color={'#fff'}>
            Policy
          </Link>
          <Link fontSize={'23px'} color={'#fff'}>
            Terms
          </Link>
          <Link fontSize={'23px'} color={'#fff'}>
            {' '}
            Contact Us
          </Link>
        </HStack>
      </Flex>

      <Flex
        alignItems={'center'}
        textAlign={'center'}
        justify={'center'}
        zIndex={100}
        direction={'column'}
        w={'80%'}
        m={'auto'}
        gap={'20px'}
      >
        <Heading color={'#fff'} as={'h1'}>
          Boost Your{' '}
          <Heading as="span" color={'#DD7C66'}>
            Network
          </Heading>{' '}
          in the FP&A Space
        </Heading>
        <Heading fontSize={'23px'} color={'#fff'} as={'h3'}>
          Connect, Collaborate, and Achieve with Leading FP&A Professionals
        </Heading>

        <Button borderRadius={'10px'} mt={'60px'} w={'250px'} h={'65px'} bg={'#C9715D'} color={'#fff'}>
          Join
        </Button>
      </Flex>
    </Flex>
  )
}
