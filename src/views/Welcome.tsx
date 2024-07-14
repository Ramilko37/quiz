import { Button, Flex, Heading } from '@chakra-ui/react'
import { PageState } from 'src/App'
import quizBgImage from '../images/reference1.webp'

interface IWelcomeProps {
  handlePageState: (pageState: PageState) => () => void
}

export const Welcome = ({ handlePageState }: IWelcomeProps) => {
  return (
    <Flex w={'100%'} h={'100dvh'} direction={'column'} p={{ base: '45px', md: '90px' }} pos={'relative'}>
      <Flex
        position={'absolute'}
        top={0}
        left={0}
        w={'100%'}
        h={'100dvh'}
        backgroundImage={quizBgImage}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        opacity={'0.5'}
      />

      <Flex
        h={'100dvh'}
        alignItems={'center'}
        textAlign={'center'}
        justify={'center'}
        zIndex={100}
        direction={'column'}
        w={{ base: '100%', md: '80%' }}
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

        <Button
          onClick={handlePageState(PageState.Onboarding)}
          variant={'primary'}
          borderRadius={'10px'}
          mt={'60px'}
          w={{ base: '100%', md: '250px' }}
          h={'65px'}
        >
          Join
        </Button>
      </Flex>
    </Flex>
  )
}
