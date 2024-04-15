import { VStack, Text, Flex, FlexProps, Button, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { languages, surveyData } from '../data'
import { InputComponent } from './Input/Input'
import { Field, Formik, FormikHelpers, FormikValues, FieldProps } from 'formik'
import * as Yup from 'yup'
import 'react-languages-select/css/react-languages-select.css'

interface Option {
  name: string
  type: 'input' | 'checkbox' | string // Add other types as necessary
  // Add additional fields if needed
}

function Survey() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const stepData = surveyData[currentStep as keyof typeof surveyData]
  const initialValues = stepData.options.reduce((acc: any, option) => {
    acc[option.name] = option.type === 'checkbox' ? false : ''
    return acc
  }, {})

  return (
    <Flex maxW={'500px'} direction={'column'} gap={'60px'}>
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
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    location: '',
  })

  function createValidationSchema(options: Option[]) {
    const schemaFields = options.reduce<Record<string, Yup.AnySchema>>((acc, option) => {
      if (option.type === 'input') {
        // Add more conditions based on specific name, type, etc.
        acc[option.name] = Yup.string().required(`${option.name} is required`)
      } else if (option.type === 'checkbox') {
        // Assuming you want to ensure a checkbox is checked
        acc[option.name] = Yup.boolean().oneOf([true], `Please check the ${option.name}`)
      }
      // Extend with other conditions as needed
      return acc
    }, {})

    return Yup.object().shape(schemaFields)
  }

  const validationSchema = createValidationSchema(options)

  return options.map((option: any) => (
    <>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={validationSchema}
        onSubmit={function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
          throw new Error('Function not implemented.')
        }}
      >
        <Field name={option.name} key={option.name}>
          {({ field }: FieldProps) => (
            <>
              {option.type === 'select' && (
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
                  >
                    {languages.map(lang => (
                      <option key={lang.code}>{lang.name}</option>
                    ))}
                  </Select>
                </Flex>
              )}
              {option.type === ('checkbox' || 'input') && (
                <InputComponent
                  rightIcon={option.icon}
                  variant={'primary'}
                  type={option.type === 'checkbox' ? 'checkbox' : 'text'}
                  {...field}
                  placeholder={option.name[0].toUpperCase() + option.name.slice(1)}
                />
              )}
            </>
          )}
        </Field>
      </Formik>

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
