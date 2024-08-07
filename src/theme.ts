import { StyleFunctionProps, extendTheme } from '@chakra-ui/react'
import { ButtonStyle } from './components/Button/buttonStyle'
import { InputStyle } from './components/Input/inputStyle'

console.log(InputStyle, 64)

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '390px',
  md: '768px',
  lg: '1366px',
  xl: '1920px',
  '2xl': '2500px',
}

const scrollbarStyles = {
  '&::-webkit-scrollbar': {
    display: { base: 'none', md: 'none' },
    width: '0',
    borderRadius: '1000px',
    backgroundColor: 'gray',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '1000px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '1000px',
    backgroundColor: 'black',
  },
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    '*': scrollbarStyles,
    'html, body': {
      scrollBehavior: 'smooth',
      color: 'Black.1',
      // bg: mode('white', 'gray.800')(props),
      touchAction: 'pan-x pan-y !important', // Disable pinch-zoom and other gestures
    },

    a: {
      WebkitAppearance: 'none',
      WebkitTapHighlightColor: 'transparent',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      UserSelect: 'none',
    },
    svg: {
      ':active, :focus': {
        backgroundColor: 'none',
      },
    },
    button: {
      _focusVisible: { boxShadow: 'none', outline: 'none' },
    },
  }),
}

const theme = extendTheme({
  config,
  styles,
  breakpoints,
  components: {
    [InputStyle.key]: InputStyle.style,
    [ButtonStyle.key]: ButtonStyle.style,
  },
  colors: {
    BgColor: '#091223',
    White700: '#A3A3A3',
    Orange: '#DD7C66',
    Purple: '#322C3B',
    Purple800: '#423A4E',
    Black: {
      1: '#141414',
      2: '#333',
      3: '#7A7A7A',
    },
    Gray: {
      1: '#F2F2F2',
      2: '#EDEDED',
      3: '#E0E0E0',
      4: '#D6D6D6',
      5: '#B8B8B8',
      6: '#8F8F8F',
    },
  },
  fonts: {
    heading: 'var(--font-robotoFlex)',
    body: 'var(--font-robotoFlex)',
  },
})

export default theme
