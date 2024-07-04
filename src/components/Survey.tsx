import { Button, Flex, Input, Select } from '@chakra-ui/react'
import { Field, FieldProps, Formik, FormikHelpers, FormikValues } from 'formik'
import { useState } from 'react'
import { languages, seniority } from 'src/data'
import { InputComponent } from './Input/Input'
import { RadioInput } from './RadioInput/RadioInput'

interface Option {
  name: string
  type: 'input' | 'checkbox' | string // Add other types as necessary
  // Add additional fields if needed
}

export const Survey = (stepData: any): any => {
  const [currentStep, setCurrentStep] = useState(1)

  console.log(stepData, 'step data')

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  function Navigation({ buttons, onNext, onBack }: any) {
    return (
      <Flex w={'100%'} justify={'space-between'} gap={'40px'}>
        {/* Render your buttons and attach handlers */}
        {buttons.map((button: any) => (
          <Button w={'100%'} h={'65px'} key={button.id} onClick={button.text === 'Next' ? onNext : onBack}>
            {button.text}
          </Button>
        ))}
      </Flex>
    )
  }

  console.log(stepData, typeof stepData, 'step data')

  return Object.keys(stepData).map((option: any) => {
    ;<Formik
      initialValues={{ name: '' }}
      onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
        throw new Error('Function not implemented.')
      }}
    >
      <Field name={option.name} key={option.name}>
        {({ field }: FieldProps) => {
          switch (option.type) {
            case 'input':
              return (
                <InputComponent
                  rightIcon={option.icon}
                  variant={'primary'}
                  type={'text'}
                  {...field}
                  placeholder={option.name[0].toUpperCase() + option.name.slice(1)}
                />
              )
            case 'checkbox':
              return <RadioInput option={option} />
            case 'select':
              return (
                <Flex direction={'column'} gap={'30px'}>
                  <Select
                    bg={'#322C3B'}
                    h={'64px'}
                    color={'#fff'}
                    fontSize={'18x'}
                    borderRadius={'16px'}
                    border={'2px solid'}
                    style={{ height: '64px' }}
                  >
                    {option.value === 'languages'
                      ? languages.map(lang => <option key={lang.name}>{lang.name}</option>)
                      : seniority.map(sen => <option key={sen.name}>{sen.name}</option>)}
                  </Select>
                  <Select
                    bg={'#322C3B'}
                    h={'64px'}
                    color={'#fff'}
                    fontSize={'18x'}
                    borderRadius={'16px'}
                    border={'2px solid'}
                    style={{ height: '64px' }}
                    display={option.value === 'seniority' ? 'none' : 'block'}
                  >
                    {languages.map(lang => (
                      <option key={lang.code}>{lang.name}</option>
                    ))}
                  </Select>
                  <Select
                    bg={'#322C3B'}
                    h={'64px'}
                    color={'#fff'}
                    fontSize={'18x'}
                    borderRadius={'16px'}
                    border={'2px solid'}
                    style={{ height: '64px' }}
                    display={option.value === 'seniority' ? 'none' : 'block'}
                  >
                    {languages.map(lang => (
                      <option key={lang.code}>{lang.name}</option>
                    ))}
                  </Select>
                </Flex>
              )
            case 'date':
              return (
                <Input
                  variant={'t4'}
                  bg={'#322C3B'}
                  p={'20px'}
                  h={'64px'}
                  color={'#fff'}
                  fontSize={'18x'}
                  borderRadius={'16px'}
                  type={'date'}
                  {...field}
                  placeholder={option.name[0].toUpperCase() + option.name.slice(1)}
                />
              )
          }
        }}
      </Field>
    </Formik>
  })
}
