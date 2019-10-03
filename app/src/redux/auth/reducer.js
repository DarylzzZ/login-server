import actions from './actions'

const initState = { token: null, user: null }

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
