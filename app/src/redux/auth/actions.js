import Axios from 'axios'
import config from '../../settings/config'
import { notification } from 'antd'

const { host } = config

const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',

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

  logout: () => ({
    type: actions.LOGOUT
  })
}

export default actions
