import { Flex, HStack, Link, Image } from '@chakra-ui/react'
import QuizLogo from '../../images/QuizLogo.svg'
import React from 'react'

export const Header = () => {
  return (
    <Flex zIndex={100} padding={'30px 90px 30px'} w={'100%'} h={'100px'} justify={'space-between'} bg={'transparent'}>
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
  )
}
