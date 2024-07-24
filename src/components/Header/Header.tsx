import { Button, Flex, HStack, Image, Link, useBreakpointValue } from '@chakra-ui/react'
import { HeaderMenuIcon } from 'src/assets/icons/HeaderMenuIcon'
import QuizLogo from '../../images/QuizLogo.svg'

interface IHeaderProps {
  handleHeaderMenuOpen: () => void
}

export const Header = ({ handleHeaderMenuOpen }: IHeaderProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Flex
      pos={'absolute'}
      top={0}
      left={0}
      zIndex={1000}
      padding={'45px 30px'}
      w={'100%'}
      h={'100px'}
      justify={'space-between'}
      bg={'transparent'}
    >
      <Image w={'176px'} h={'76px'} src={QuizLogo} />

      {isMobile ? (
        <Button bg={'transparent'} onClick={handleHeaderMenuOpen}>
          <HeaderMenuIcon />
        </Button>
      ) : (
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
      )}
    </Flex>
  )
}
