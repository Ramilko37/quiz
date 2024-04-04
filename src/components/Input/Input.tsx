import React, { ReactNode } from 'react'
import { FormControl, FormErrorMessage, Input, InputGroup, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import { MdClose } from 'react-icons/md'

export interface InputComponentProps extends InputProps {
  name: string
  onChange: any
  customError?: JSX.Element
  inputRightElement?: ReactNode
}

export const InputComponent = ({
  name,
  placeholder,
  onChange,
  customError,
  margin,
  marginBottom,
  inputRightElement,
  type,
  variant,
  ...containerProps
}: InputComponentProps) => {
  const [field, meta, helpers] = useField(name)
  const errorComponent = Boolean(customError) ? (
    customError
  ) : (
    <FormErrorMessage color={'Pink'}>
      <MdClose />
      {meta.error}
    </FormErrorMessage>
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value)
    onChange && onChange(e)
  }

  const handleBlur = () => {
    helpers.setTouched(true)
  }

  return (
    <FormControl
      isInvalid={Boolean(meta.touched && meta.error)}
      margin={margin}
      marginBottom={marginBottom}
      onBlur={containerProps.onBlur}
      tabIndex={-1}
      {...containerProps}
    >
      <InputGroup>
        <Input
          id={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          type={type}
          value={field.value}
          variant={'t4'}
          p={'20px'}
          h={'64px'}
          borderRadius={'16px'}
          border={Boolean(meta.touched && meta.error) ? '2px solid #E93571' : ''}
          _focusVisible={{
            border: '2px solid #E93571',
            borderColor: '#E93571',
          }}
        />
        {inputRightElement}
      </InputGroup>
      {errorComponent}
    </FormControl>
  )
}
