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

        const { data } = res
        if (data.success) {
          dispatch({
            type: actions.LOGIN_SUCCESS,
            token: data.token,
            user: data.user
          })
          notification.open({
            message: 'Login success',
            duration: 2
          })
        } else {
          dispatch({ type: actions.LOGIN_ERROR, message: data.message })
          notification.open({
            message: 'Login error',
            description: data.message,
            duration: 2
          })
        }
      })
      .catch(err => {
        dispatch({ type: actions.LOGIN_ERROR, message: err.message })
        notification.open({
          message: 'Login error',
          description: err.message,
          duration: 2
        })
      })
  },

  signup: (username, password) => (dispatch, getState) => {
    dispatch({ type: actions.SIGNUP_REQUEST })

    Axios.post(`${host}/api/users`, { username, password })
      .then(res => {
        console.log(res.data)

        const { data } = res
        if (data.success) {
          dispatch({
            type: actions.LOGIN_SUCCESS,
            token: data.token,
            user: data.user
          })
          notification.open({
            message: 'Signup success',
            duration: 2
          })
        } else {
          dispatch({ type: actions.SIGNUP_ERROR, message: data.message })
          notification.open({
            message: 'Signup error',
            description: data.message,
            duration: 2
          })
        }
      })
      .catch(err => {
        dispatch({ type: actions.SIGNUP_ERROR, message: err.message })
        notification.open({
          message: 'Signup error',
          description: err.message,
          duration: 2
        })
      })
  },

  logout: () => ({
    type: actions.LOGOUT
  })
}

export default actions
