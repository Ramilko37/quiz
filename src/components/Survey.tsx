import { VStack, Text, Flex, FlexProps, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { surveyData } from '../data'
import { InputComponent } from './Input/Input'
import { Formik, FormikHelpers, FormikValues, useFormik } from 'formik'
import * as Yup from 'yup'

export const EmailSchema = Yup.string().matches(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'Invalid email'
)

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^\S+$/, 'Name must not be only whitespace')
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is required'),
  email: EmailSchema.required('Email is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
})

function Survey() {
  const [currentStep, setCurrentStep] = useState(1)

  async function onSubmit(data: { name: string; surname: string }) {
    console.log(data)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: onSubmit,
  })

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const stepData = surveyData[currentStep as keyof typeof surveyData]

  return (
    <Flex direction={'column'} gap={'60px'}>
      <Question title={stepData.title} text={stepData.text} />
      <Flex direction={'column'} gap={'30px'}>
        <Options options={stepData.options} />
      </Flex>
      <Navigation buttons={stepData.buttons} onNext={handleNext} onBack={handleBack} />
    </Flex>
  )
}

function Question({ title, text }: any) {
  return (
    <VStack>
      <Text fontSize={'20px'} color={'#fff'}>
        {title}
      </Text>
      <Text color={'#fff'}>{text}</Text>
    </VStack>
  )
}

interface IOptionsProps extends FlexProps {
  options: any
}

function Options({ options, ...props }: IOptionsProps) {
  return options.map((option: any) => (
    <>
      {/* Render your options based on type */}
      <Formik
        initialValues={{}}
        onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
          throw new Error('Function not implemented.')
        }}
      >
        <InputComponent
          variant={'primary'}
          type="text"
          name={option.name}
          placeholder={option.placeholder}
          onChange={() => {}}
        />
      </Formik>

      {/* {option.type === 'checkbox' && (
        <Input variant={'primary'} type="checkbox" name={'Surname'} onChange={undefined} />
      )} */}
      {/* Add other option types as necessary */}
    </>
  ))
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

export default Survey
