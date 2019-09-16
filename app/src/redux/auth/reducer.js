import actions from './actions'

const initState = { token: null }

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        token: action.token
      }
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
