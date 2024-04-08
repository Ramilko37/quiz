import { defineStyleConfig } from '@chakra-ui/react'

export const Style = defineStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      borderRadius: '20px',
      backgroundColor: '#C9715D',
      color: '#FDFDFD',
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '40px',
      padding: '16px 12px',
      _disabled: {
        opacity: 0.6,
      },

      _hover: {
        bgColor: '#C9715D',
      },
    },
    secondary: {
      borderRadius: '10px',
      backgroundColor: '#fff',
      color: '#000',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: 'normal',
      _disabled: {
        opacity: 0.6,
      },

      _hover: {
        bgColor: '#C9715D',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
})

export const ButtonStyle = {
  key: 'Button',
  style: Style,
}
