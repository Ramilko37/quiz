import { defineStyleConfig } from '@chakra-ui/react'

export const Style = defineStyleConfig({
  baseStyle: {},
  variants: {
    primary: {
      field: {
        borderRadius: '20px',
        backgroundColor: '#322C3B',
        color: 'White700',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '40px',
        padding: '16px 12px',

        _placeholder: {
          color: 'Gray.6',
        },
        _hover: {
          bgColor: '#F7F7F7',
          border: '2px solid Gray.3',
        },
        _invalid: {
          border: '2px solid Pink',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
})

export const InputStyle = {
  key: 'Input',
  style: Style,
}
