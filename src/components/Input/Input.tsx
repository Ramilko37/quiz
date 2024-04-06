import React, { useState } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { FaCross } from 'react-icons/fa'

export interface InputComponentProps extends InputProps {
  name: string
  onChange: any
}

export const InputComponent = ({
  name,
  placeholder,
  onChange,
  margin,
  marginBottom,
  type,
  variant,
  ...containerProps
}: InputComponentProps) => {
  const [field, meta, helpers] = useField(name)
  const [isFocused, setIsFocused] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value)
    onChange && onChange(e)
  }

  const handleBlur = () => {
    helpers.setTouched(true)
    setIsFocused(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const validateInput = (value: string) => {
    // If value is either empty or contains only numbers, consider it invalid
    setIsInvalid(value.trim() === '' || /^\d+$/.test(value))
  }

  console.log(isInvalid, 49)
  return (
    <FormControl
      margin={margin}
      marginBottom={marginBottom}
      onFocus={handleFocus}
      onBlur={containerProps.onBlur}
      tabIndex={-1}
      position={'relative'}
      {...containerProps}
      bg={'#322C3B'}
      borderRadius={'32px'}
    >
      <FormLabel
        visibility={isFocused ? 'visible' : 'hidden'}
        w={'fit-content'}
        position={'absolute'}
        left={'16px'}
        color={
          meta.touched
            ? isInvalid
              ? '#F54D3F' // Red when invalid
              : '#0D8D67' // Green when valid
            : '#0D8D67' // Default color
        }
        top={'-15%'}
        zIndex={10}
        bg={'linear-gradient(0deg, rgba(50,44,59,1) 0%, rgba(9,18,35,1) 50%)'}
        fontSize={'14px'}
        overflow={'hidden'}
        p={'0 8px 0'}
      >
        {placeholder}
      </FormLabel>
      <Input
        id={name}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateInput(e.target.value)}
        onBlur={handleBlur}
        type={type}
        variant={'t4'}
        bg={'#322C3B'}
        p={'20px'}
        h={'64px'}
        color={'#fff'}
        fontSize={'18x'}
        borderRadius={'16px'}
        border={isInvalid ? '2px solid #F54D3F' : '2px solid'}
        _focusVisible={{
          borderColor: isInvalid ? '#F54D3F' : '#0D8D67',
        }}
      />
      <FormErrorMessage color={'Pink'}>
        <FaCross />
        {meta.error}
      </FormErrorMessage>
    </FormControl>
  )
}
