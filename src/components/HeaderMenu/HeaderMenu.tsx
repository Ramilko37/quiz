import { Button, Flex, Link } from '@chakra-ui/react'

interface IHeaderMenuProps {
  onClose: () => void
}
export const HeaderMenu = ({ onClose }: IHeaderMenuProps) => {
  return (
    <Flex
      pos={'absolute'}
      top={0}
      left={0}
      direction={'column'}
      w={'100vw'}
      h={'100dvh'}
      bg={'#0B0F35'}
      zIndex={10000}
      justify={'center'}
      align={'center'}
    >
      <Button
        pos={'absolute'}
        top={'49px'}
        right={'10px'}
        border={'none'}
        outline={'none'}
        bg={'transparent'}
        w={'48px'}
        h={'48px'}
        onClick={onClose}
      >
        X
      </Button>
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
    </Flex>
  )
}
