import Axios from 'axios'
import config from '../../settings/config'
import { notification } from 'antd'

const { host } = config

const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',

  LOGOUT: 'LOGOUT',

  checkAuthorization: () => ({
    type: actions.CHECK_AUTHORIZATION
  }),

  login: (username, password) => (dispatch, getState) => {
    dispatch({ type: actions.LOGIN_REQUEST })

    Axios.post(`${host}/api/users/login`, { username, password })
      .then(res => {
        console.log(res.data)

        let { data } = res
        if (data.success) {
          dispatch({ type: actions.LOGIN_SUCCESS, token: data.token })
          notification.open({
            message: 'Login success'
          })
        } else {
          dispatch({ type: actions.LOGIN_ERROR, message: data.message })
          notification.open({
            message: 'Login error',
            description: data.message
          })
        }
      })
      .catch(err => {
        dispatch({ type: actions.LOGIN_ERROR, message: err.message })
        notification.open({
          message: 'Login error',
          description: err.message
        })
      })
  },

  signup: (username, password) => (dispatch, getState) => {
    dispatch({ type: actions.SIGNUP_REQUEST })

    Axios.post(`${host}/api/users`, { username, password })
      .then(res => {
        console.log(res.data)

        let { data } = res
        if (data.success) {
          dispatch({ type: actions.SIGNUP_SUCCESS, token: data.token })
          notification.open({
            message: 'Signup success'
          })
        } else {
          dispatch({ type: actions.SIGNUP_ERROR, message: data.message })
          notification.open({
            message: 'Signup error',
            description: data.message
          })
        }
      })
      .catch(err => {
        dispatch({ type: actions.SIGNUP_ERROR, message: err.message })
        notification.open({
          message: 'Signup error',
          description: err.message
        })
      })
  },

  logout: () => ({
    type: actions.LOGOUT
  })
}

export default actions
