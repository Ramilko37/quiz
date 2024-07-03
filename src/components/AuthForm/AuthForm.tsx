/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import { Button, Flex, Input } from '@chakra-ui/react'
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
}

export const AuthForm = ({ handlePageState, setAuthorised }: ISignInForm) => {
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
    // formType === 'signup'
    //   ? await ApiSignUp(data.name, data.email.trim(), data.password)
    //   : await ApiSignIn(data.name, data.email.trim(), data.password)
    console.log('submit')
    ApiSignUp(data.email.trim(), data.password).then(res => console.log(res, 64))
    // ApiSignIn(data.email.trim(), data.password).then(() => {
    //   setAuthorised(true)
    //   handlePageState(PageState.Quiz)
    // })
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
            variant={'tertiary'}
            onClick={renderProps.onClick}
          >
            Continue with Facebook
          </Button>
        )}
      />
      <Flex w={'100%'} direction={'column'} maxW={'500px'} gap={'16px'} align={'center'}>
        {/* <Input name={'name'} placeholder={'Name'} onChange={formik.handleChange} margin={'24px 0 10px'} /> */}
        <Input name={'email'} placeholder={'Email'} onChange={formik.handleChange} marginBottom={'10px'} />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Create password'}
          onChange={formik.handleChange}
          marginBottom={'10px'}
        />
        {/* <Input
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          onChange={formik.handleChange}
          marginBottom={'32px'}
        /> */}

        <Flex w={'100%'} gap={'40px'}>
          <Button
            variant={'primary'}
            children={'Back'}
            marginBottom={'24px'}
            w={'100%'}
            type={'submit'}
            onClick={() => handlePageState(PageState.Welcome)}
            isDisabled={emptyField}
            bgColor={'rgb(52, 53, 65)'}
            p={'10px 50px 10px 50px'}
            borderRadius={'18px'}
            h={'65px'}
          />

          <Button
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
