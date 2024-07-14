import { Button, Flex, HStack, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import Select from 'react-select'
import { PageState } from 'src/App'
import { languages } from 'src/data'
import QuizLogo from '../images/QuizLogo.svg'

export enum ShowedForm {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
}

interface IFormsPageProps {
  setPageState: React.Dispatch<React.SetStateAction<PageState>>
}

enum FormSteps {
  NameSurname,
  BirthDate,
  Location,
  Languages,
}

interface IFormData {
  name: string
  surname: string
  birthDate: string
  location: string
  languages: string[]
}

type selectOption = {
  value: string
  label: string
}

const languagePlaceholders = [
  'First Language',
  'Second Language',
  'Third Language',
  'Fourth Language',
  'Fifth Language',
  'Sixth Language',
]

export const Forms = ({ setPageState }: IFormsPageProps) => {
  const [formStep, setFormStep] = useState<FormSteps>(0)
  const [formValue, setFormValue] = useState<string>('')
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    surname: '',
    birthDate: '',
    location: '',
    languages: [],
  })
  const [languageSelectComponent, setLanguageSelectComponent] = useState<selectOption[][]>([languages])

  const handleAddSelectComponent = () => {
    setLanguageSelectComponent(prev => [...prev, languages])
  }

  const handleSelectValue = (e: any) => {
    setFormData(prev => ({ ...prev, languages: [...prev.languages, e.value] }))
  }

  const formComponent = useMemo(() => {
    switch (formStep) {
      case FormSteps.NameSurname:
        return (
          <Flex w={'100%'} direction={'column'} gap={'40px'}>
            <Text fontFamily={'Montserrat'} fontSize={'20px'} fontWeight={600} color={'#fff'} mb={'40px'}>
              Let's Get You Set Up on Networky Community
            </Text>
            <Input
              name={'name'}
              placeholder={'First name'}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              marginBottom={'10px'}
            />
            <Input
              name={'surname'}
              placeholder={'Last name'}
              onChange={e => setFormData(prev => ({ ...prev, surname: e.target.value }))}
              marginBottom={'10px'}
            />
          </Flex>
        )
      case FormSteps.BirthDate:
        return (
          <Flex w={'100%'} direction={'column'} gap={'40px'}>
            <Text fontFamily={'Montserrat'} fontSize={'20px'} fontWeight={600} color={'#fff'}>
              What is your date of birth?
            </Text>
            <Text fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600} color={'#fff'}>
              Optional. Please provide your birth date. We use this information to offer personalized experiences
              relevant to your age group. If you prefer not to share this information, feel free to skip this question.
            </Text>
            <Flex w={'100%'} gap={'16px'} justify={'center'}>
              <Input
                placeholder="DD MM YYYY"
                size="md"
                type="date"
                onChange={e => setFormData(prev => ({ ...prev, birthDate: e.target.value }))}
              />
            </Flex>
          </Flex>
        )
      case FormSteps.Location:
        return (
          <Flex w={'100%'} direction={'column'} gap={'40px'}>
            <Text fontFamily={'Montserrat'} fontSize={'20px'} fontWeight={600} color={'#fff'} mb={'40px'}>
              What is your location?
            </Text>
            <Text fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600} color={'#fff'}>
              Share your location to connect with relevant professionals in your area, enhancing local networking
              opportunities
            </Text>
            <InputGroup>
              <Input
                name={'name'}
                placeholder={'Location'}
                onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
                marginBottom={'10px'}
              />
              <InputRightElement mr={'8px'} alignItems={'center'}>
                <HiMagnifyingGlass size={'24px'} color={'#A3A3A3'} />
              </InputRightElement>
            </InputGroup>
          </Flex>
        )
      case FormSteps.Languages:
        return (
          <Flex w={'100%'} h={'100%'} direction={'column'} gap={'40px'}>
            <Text fontFamily={'Montserrat'} fontSize={'20px'} fontWeight={600} color={'#fff'} mb={'40px'}>
              What are your preferred languages for communication?
            </Text>
            <Text fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600} color={'#fff'}>
              This helps us match you with networking opportunities in languages you're most comfortable with.
            </Text>

            {languageSelectComponent.map((component, index) => (
              <Select
                placeholder={languagePlaceholders[index]}
                onChange={e => handleSelectValue(e)}
                styles={{
                  control: styles => ({
                    ...styles,
                    backgroundColor: '#322C3B',
                    borderRadius: '20px',
                    height: '64px',
                    background: '#322C3B',
                    border: 'none',
                  }),
                  indicatorSeparator: styles => ({
                    ...styles,
                    display: 'none',
                  }),
                  indicatorsContainer: styles => ({
                    ...styles,
                    color: '#A3A3A3',
                    opacity: '0.7',
                  }),
                  singleValue: styles => ({
                    ...styles,
                    color: '#A3A3A3',
                  }),
                  menu: styles => ({
                    ...styles,
                    backgroundColor: '#322C3B',
                    borderRadius: '20px',
                    color: '#A3A3A3',
                  }),
                  menuList: styles => ({
                    ...styles,
                    backgroundColor: '#322C3B',
                    borderRadius: '20px',
                    color: '#A3A3A3',
                  }),
                }}
                options={component}
              />
            ))}
            <Button
              margin={'0 auto'}
              justifyContent={'center'}
              onClick={handleAddSelectComponent}
              w={'40px'}
              h={'40px'}
              borderRadius={'50%'}
            >
              <FaPlus />
            </Button>
          </Flex>
        )
      default:
        return <></>
    }
  }, [formStep, languageSelectComponent])

  const handleBack = () => {
    setFormStep(formStep - 1)
  }

  const handleNext = () => {
    console.log(formStep, 207)
    if (formStep === 3) {
      console.log('here i am')
      localStorage.setItem('formsData', JSON.stringify(formData))
      setPageState(PageState.Quiz)
    }
    setFormStep(formStep + 1)
  }

  console.log(formData, 222)

  return (
    <>
      <Flex
        w={'100%'}
        h={'100%'}
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
        {formComponent}
        <Flex w={'100%'} gap={'40px'}>
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
