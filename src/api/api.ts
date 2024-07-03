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
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    .then(res => console.log(res, 27))
    .catch(err => console.log(err))
}

export const ApiSignIn = async (email: string, password: string) => {
  axios
    .post(
      `${baseUrl}/v1/user/auth`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    .then(res => {
      console.log(res.data.payload.access_token.token, 45)
      localStorage.setItem('token', res.data.payload.access_token.token)
    })
    .catch(err => console.log(err))
}

export const ApiGetSurvey = async (token: string) => {
  try {
    const response = await axios.get(`${baseUrl}/v1/survey/source`, {
      params: {
        community: 'base',
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (err) {
    console.log(err)
  }
}
