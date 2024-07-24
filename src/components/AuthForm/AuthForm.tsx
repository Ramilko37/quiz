/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import { Button, Flex, FormControl, FormErrorMessage, Input, Text } from '@chakra-ui/react'
import { FormikProvider, useFormik } from 'formik'
import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { PageState } from 'src/App'
import { ApiSignUp } from 'src/api/api'
import { EmailSchema, PasswordSchema, handleEnterKeyDown } from 'src/utils/utils'
import * as Yup from 'yup'

const signUpSchema = Yup.object().shape({
  // name: Yup.string()
  //   .trim()
  //   .matches(/^\S+$/, 'Name must not be only whitespace')
  //   .min(2, 'Name must be at least 2 characters long')
  //   .required('Name is required'),
  email: EmailSchema.required('Email is required'),
  password: PasswordSchema.required('Password is required'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  //   .required('Confirm password is required'),
})

interface ISignInForm {
  formType?: 'signup' | 'signin'
  handlePageState: (pageState: PageState) => void
  setAuthorised: React.Dispatch<React.SetStateAction<boolean>>
  setIsEmailForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthForm = ({ handlePageState, setAuthorised, setIsEmailForm }: ISignInForm) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    onSubmit: onSubmit,
  })

  const emptyField = formik.values.name === '' || formik.values.email === '' || formik.values.password === ''

  // const onFacebookLogin = async (userInfo: ReactFacebookLoginInfo) => {
  //   if (!userInfo || !userInfo.accessToken) {
  //     return
  //   }

  //   if (!userInfo.email) {
  //     return
  //   }

  //   await ApiOAuth(OAuthProviders.facebook, userInfo.accessToken)
  // }

  const onFacebookLogin = () => {}

  async function onSubmit(data: { email: string; password: string }) {
    console.log('clicked')
    await ApiSignUp(data.email.trim(), data.password)
      .then(res => {
        if (res?.status === 201) {
          console.log('success', res)
          setIsEmailForm(true)
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  React.useEffect(() => {
    const keyDownListener = (event: KeyboardEvent) => handleEnterKeyDown(event, formik)
    window.addEventListener('keydown', keyDownListener)

    return () => {
      window.removeEventListener('keydown', keyDownListener)
    }
  }, [formik])

  return (
    <FormikProvider value={formik}>
      <FacebookLogin
        appId={'123'}
        fields="email, picture"
        callback={onFacebookLogin}
        disableMobileRedirect={true}
        onFailure={() => console.log('failure')}
        render={(renderProps: any) => (
          <Button
            w={'100%'}
            h={'60px'}
            border={'3px solid rgb(50, 44, 59)'}
            borderRadius={'20px'}
            bg={'rgb(242, 240, 244)'}
            fontFamily={'Montserrat'}
            fontWeight={500}
            color={'#000'}
            leftIcon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 18.0661C36 8.08856 27.941 0 18 0C8.05896 0 0 8.08856 0 18.0661C0 26.5384 5.81184 33.6478 13.6519 35.6004V23.5871H9.94032V18.0661H13.6519V15.6872C13.6519 9.53819 16.4246 6.68808 22.4395 6.68808C23.58 6.68808 25.5478 6.91282 26.3527 7.13684V12.1412C25.9279 12.0964 25.1899 12.0739 24.2734 12.0739C21.3221 12.0739 20.1816 13.1962 20.1816 16.1135V18.0661H26.0611L25.051 23.5871H20.1816V36C29.093 34.9196 36 27.303 36 18.0661Z"
                  fill="#0966FF"
                />
              </svg>
            }
            onClick={renderProps.onClick}
          >
            <Text fontFamily={'Montserrat'}> Sign up with Facebook</Text>
          </Button>
        )}
      />
      <Text margin={'0 auto'} textAlign={'center'} justifyContent={'center'} color={'#C1C1C1'}>
        - OR -{' '}
      </Text>
      <Flex w={'100%'} direction={'column'} maxW={'500px'} gap={'25px'} align={'center'}>
        {/* <Input name={'name'} placeholder={'Name'} onChange={formik.handleChange} margin={'24px 0 10px'} /> */}
        <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
          <Input name={'email'} placeholder={'Email address'} onChange={formik.handleChange} marginBottom={'10px'} />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.touched.password && !!formik.errors.password}>
          <Input
            type={'password'}
            name={'password'}
            placeholder={'Password (6+ characters)'}
            onChange={formik.handleChange}
            marginBottom={'10px'}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Text fontFamily={'Montserrat'} fontWeight={400} color={'#FDFDFD'}>
          By clicking Next, you agree to the Networky Terms of Service, Privacy Policy, and Cookie Policy.
        </Text>

        <Flex w={'100%'} gap={'40px'} mt={'45px'} justify={'space-between'}>
          <Button
            variant={'primary'}
            children={'Back'}
            marginBottom={'24px'}
            w={'100%'}
            type={'submit'}
            onClick={() => handlePageState(PageState.Welcome)}
            bgColor={'rgb(52, 53, 65)'}
            borderRadius={'18px'}
            h={'65px'}
          />

          <Button
            disabled={false}
            variant={'primary'}
            children={'Next'}
            marginBottom={'24px'}
            w={'100%'}
            type={'submit'}
            bgColor={'#fff'}
            color={'#000'}
            opacity={'1!important'}
            onClick={() => {
              formik.handleSubmit()
            }}
            // isDisabled={emptyField}
            h={'65px'}
          />
        </Flex>
      </Flex>
    </FormikProvider>
  )
}
