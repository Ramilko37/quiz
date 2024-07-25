import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { QuizQuestion } from 'src/data'
import QuizLogo from '../images/QuizLogo.svg'
import Proficiency from '../images/proficiency.png'

interface Option {
  name: string
  type: 'input' | 'checkbox' | string // Add other types as necessary
  // Add additional fields if needed
}

interface ISurveyProps {
  quizData: QuizQuestion[]
}

enum SlugType {
  Seniority = 'seniority_level',
  Career = 'career',
  Interests = 'interests',
  Social = 'social',
  Target = 'target',
  Finish = 'finish',
}

export const Quiz = ({ quizData }: ISurveyProps): any => {
  const [currentStep, setCurrentStep] = useState(0)
  const [stepData, setStepData] = useState<QuizQuestion>(quizData[0])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log(currentStep)
    setStepData(quizData[currentStep])
    console.log(quizAnswer, 25)
  }, [currentStep])

  interface IQuizAnswer {
    seniority_level: string
    career: string
    interests: string
    social: string
    target: string
    finish: string
  }

  const [quizAnswer, setQuizAnswer] = useState<IQuizAnswer>({
    seniority_level: '',
    career: '',
    interests: '',
    social: '',
    target: '',
    finish: '',
  })

  const handleNext = () => {
    setQuizAnswer(prev => ({ ...prev, [stepData.slug]: inputValue }))
    setInputValue('')
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

  console.log(quizData[currentStep], typeof quizData, 'step data')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const answerId = e.target.value
    const answer = stepData.property[0].options[Number(answerId) > 0 ? Number(answerId) - 1 : 0].text
    console.log(answer, 'answer')
    setInputValue(answer)
  }

  console.log(stepData.property[0]?.options, 87)

  const component = (stepData: QuizQuestion) => {
    switch (stepData.slug) {
      case SlugType.Seniority:
        return (
          <Select
            h={'64px'}
            borderRadius={'20px'}
            placeholder="Seniority level"
            bg={'#343541'}
            border={'none'}
            color={'#FDFDFD'}
            onChange={e => handleSelectChange(e)}
          >
            {stepData.property[0].options.map(item => (
              <option style={{ width: '64px', borderRadius: '20px' }} key={item.id} value={item.value}>
                {item.text}
              </option>
            ))}
          </Select>
        )
      case SlugType.Career:
        return (
          <Flex w={'100%'} h={'100%'} direction={'column'} gap={'40px'}>
            <Image src={Proficiency} />
            <Textarea
              minH={'190px'}
              bg={'#322C3B'}
              border={'none'}
              borderRadius={'20px'}
              placeholder={stepData.property[0].text}
              _placeholder={{ color: '#A3A3A3' }}
              color={'#A3A3A3'}
              borderStyle={'none'}
              defaultValue={''}
              onChange={e => setInputValue(e.target.value)}
              css={{ '-webkit-appearance': 'none !important' }}
            />
          </Flex>
        )
      case SlugType.Interests:
        return (
          <Flex w={'100%'} h={'100%'} direction={'column'} gap={'40px'}>
            <Text color={'#FDFDFD'}>{stepData.text}</Text>
            <Textarea
              minH={'190px'}
              bg={'#322C3B'}
              border={'none'}
              borderRadius={'20px'}
              placeholder={stepData.property[0].text}
              _placeholder={{ color: '#A3A3A3' }}
              color={'#A3A3A3'}
              borderStyle={'none'}
              onChange={e => setInputValue(e.target.value)}
              css={{ '-webkit-appearance': 'none !important' }}
            />
          </Flex>
        )
      case SlugType.Social:
        return (
          <Flex w={'100%'} h={'100%'} direction={'column'} gap={'40px'}>
            <Text color={'#FDFDFD'}>{stepData.text}</Text>
            <InputGroup>
              <Input
                bg={'#322C3B'}
                border={'none'}
                borderRadius={'20px'}
                placeholder={stepData.property[0].text}
                _placeholder={{ color: '#A3A3A3' }}
                color={'#A3A3A3'}
                borderStyle={'none'}
                onChange={e => setInputValue(e.target.value)}
                css={{ '-webkit-appearance': 'none !important' }}
              />
              <InputRightElement mr={'8px'} alignItems={'center'}>
                <IoClose size={'24px'} color={'#A3A3A3'} />
              </InputRightElement>
            </InputGroup>
          </Flex>
        )
      case SlugType.Target:
        return (
          <Flex w={'100%'} h={'100%'} direction={'column'} gap={'40px'}>
            {stepData.property[0].options.map(item => (
              <Flex bg={'#423A4E'} p={'16px 24px'} borderRadius={'20px'} gap={'16px'} justify={'space-between'}>
                <Flex>
                  <Text color={'#fff'}>{item.text}</Text>
                </Flex>
                <Flex>
                  <Checkbox key={item.id} value={item.value}></Checkbox>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )
      case SlugType.Finish:
        const extractTextFunc = () => {
          const tempDiv = document.createElement('div')
          tempDiv.innerHTML = stepData.text

          const pTags = tempDiv.getElementsByTagName('p')

          const textArray = Array.from(pTags).map(p => p.textContent?.trim())

          return textArray
        }

        const textData = extractTextFunc()
        return (
          <Flex margin={'30% auto'} w={'100%'} maxW={'450px'} h={'100%'} direction={'column'} gap={'40px'}>
            <Text color={'#fff'} fontWeight={700}>
              {stepData.title}
            </Text>
            {textData.map(item => (
              <Text color={'#fff'}>{item}</Text>
            ))}
          </Flex>
        )
    }
  }

  return (
    <>
      <Flex
        w={'100%'}
        h={'100dvh  '}
        direction={'column'}
        maxW={'600px'}
        gap={'40px'}
        align={'center'}
        boxSizing={'border-box'}
        p={'24px'}
      >
        <HStack w={'100%'} justifyContent={'flex-start'} mt={'40px'}>
          <Image alignItems={'left'} w={'102px'} h={'44px'} src={QuizLogo} />
        </HStack>
        <Text
          display={stepData.slug === SlugType.Finish ? 'none' : 'flex'}
          fontFamily={'Montserrat'}
          fontSize={'20px'}
          fontWeight={600}
          color={'#FDFDFD'}
        >
          {stepData.title}
        </Text>
        {component(stepData)}
        <Flex w={'100%'} gap={'40px'} display={stepData.slug === SlugType.Finish ? 'none' : 'flex'}>
          <Button
            variant={'primary'}
            children={'Back'}
            marginBottom={'24px'}
            w={'100%'}
            type={'submit'}
            bgColor={'rgb(52, 53, 65)'}
            p={'10px 50px 10px 50px'}
            borderRadius={'18px'}
            h={'65px'}
            onClick={handleBack}
          />

          <Button
            variant={'primary'}
            children={'Next'}
            marginBottom={'24px'}
            w={'100%'}
            type={'submit'}
            bgColor={'#FDFDFD'}
            color={'#000'}
            opacity={'1!important'}
            onClick={handleNext}
            h={'65px'}
          />
        </Flex>
      </Flex>
    </>
  )
}
