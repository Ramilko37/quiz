import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_BASE_URL

export type AuthData = {
  email: string
  password: string
}

export const ApiSignUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(
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
    return response
  } catch (err) {
    console.log(err)
  }
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

export const ApiGetVeryficationCode = async (code: number) => {
  try {
    const response = await axios.post(
      `${baseUrl}/v1/user/confirm`,
      {
        code: code,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response
  } catch (err) {
    console.log(err)
  }
}

export const ApiGetRefreshToken = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/v1/user/auth/token/refresh`,
      {
        refresh_token: localStorage.getItem('refresh_token'),
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return response
  } catch (err) {
    console.log(err)
  }
}

export const ApiGetLanguages = async () => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.get(`${baseUrl}/v1/user/data/language`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response, 100)
    return response
  } catch (err) {
    console.log(err)
  }
}
