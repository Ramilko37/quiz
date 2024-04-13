import { Flex, Link, Image, Text } from '@chakra-ui/react'
import React from 'react'
import QuizLogo from '../../images/QuizLogo.svg'
import { IoChatboxEllipses } from 'react-icons/io5'

export const Footer = () => {
  return (
    <Flex
      bgColor={'#091223'}
      zIndex={200}
      w={'100%'}
      h={'fit-content'}
      as={'footer'}
      p={'40px 40px 55px 90px'}
      justify={'space-between'}
    >
      <Flex direction={'column'} w={'30%'} gap={'35px'}>
        <Image w={'176px'} h={'76px'} src={QuizLogo} />
        <Text fontSize={'16px'} color={'#fff'}>
          Networky AI Chatbot for networking: <br /> enhancing connections within companies, communities, and events
        </Text>
      </Flex>
      <Flex direction={'column'} w={'30%'} gap={'15px'}>
        <IoChatboxEllipses size={'60px'} fill="#D1D1D1" />
        <Link fontSize={'24px'} fontWeight={600} color={'#DD7C66'}>
          Need Help?
        </Link>
        <Text fontSize={'16px'} color={'#fff'}>
          Contact our customer support if you have anyquestions. We'll help you out
        </Text>
        <Text fontSize={'16px'} color={'#fff'}>
          help@networky.com
        </Text>
      </Flex>
    </Flex>
  )
}
