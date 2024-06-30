import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export type AuthData = {
  email: string
  password: string
}

export const ApiSignUp = async (email: string, password: string) => {
  axios
    .post(
      `${baseUrl}/v1/user/signup`,
      {
        email,
        password,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then(res => console.log(res, 27))
    .catch(err => console.log(err))
}
