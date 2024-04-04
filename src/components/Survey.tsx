import { VStack, Text, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { surveyData } from '../data'

function Survey() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const stepData = surveyData[currentStep as keyof typeof surveyData]

  return (
    <div className="container">
      <Question title={stepData.title} text={stepData.text} />
      <Options options={stepData.options} />
      <Navigation buttons={stepData.buttons} onNext={handleNext} onBack={handleBack} />
    </div>
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

function Options({ options }: any) {
  return options.map((option: any) => (
    <div key={option.id}>
      {/* Render your options based on type */}
      {option.type === 'input' && <Input variant={'primary'} type="text" name={'NAme'} onChange={undefined} />}
      {option.type === 'checkbox' && <Input type="checkbox" name={''} onChange={undefined} />}
      {/* Add other option types as necessary */}
    </div>
  ))
}

function Navigation({ buttons, onNext, onBack }: any) {
  return (
    <div>
      {/* Render your buttons and attach handlers */}
      {buttons.map((button: any) => (
        <button key={button.id} onClick={button.text === 'Next' ? onNext : onBack}>
          {button.text}
        </button>
      ))}
    </div>
  )
}

export default Survey
