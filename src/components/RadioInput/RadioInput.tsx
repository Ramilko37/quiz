import { Flex, HStack, Radio, Text, VStack } from '@chakra-ui/react'

export const RadioInput = ({ option }: any) => {
  console.log(option)
  return (
    <HStack w={'100%'} h={'100%'} p={'8px 30px'} bgColor={'Purple800'} borderRadius={'10px'}>
      <Flex w={'100%'} justifyContent={'space-between'} gap={'32px'}>
        <VStack alignItems={'flex-start'} justifyContent={'flex-start'} w={'100%'} h={'100%'}>
          <Text fontSize={'12px'} fontWeight={600} color={'#fff'}>
            {option.title}
          </Text>
          <Text fontSize={'12px'} fontWeight={600} color={'#fff'}>
            {option.text}
          </Text>{' '}
        </VStack>
        <Radio style={{ justifyContent: 'flex-end' }} value={option.text} />
      </Flex>
    </HStack>
  )
}
