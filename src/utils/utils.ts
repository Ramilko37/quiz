import { FormikProps } from 'formik'
import * as Yup from 'yup'

export const PasswordRegexValidators = {
  RequiredNumber: /[0-9]/,
  RequiredUpperCase: /[A-Z]/,
  RequiredSymbol: /[\W_~]/,
}

export const PasswordSchema = Yup.string()
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(PasswordRegexValidators.RequiredNumber, 'Password requires a number')
  .matches(PasswordRegexValidators.RequiredUpperCase, 'Password requires an uppercase letter')
  .matches(PasswordRegexValidators.RequiredSymbol, 'Password requires a symbol')

export const EmailSchema = Yup.string().matches(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'Invalid email'
)

export async function handleEnterKeyDown<T extends object>(event: KeyboardEvent, formik: FormikProps<T>) {
  if (event.key === 'Enter') {
    const touched = Object.keys(formik.initialValues).reduce((acc, fieldName) => ({ ...acc, [fieldName]: true }), {})
    formik.setTouched(touched)
    await formik.validateForm()

    if (formik.isValid) {
      formik.handleSubmit()
    }
  }
}
