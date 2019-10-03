import actions from './actions'

const initState = { redirectUrl: null }

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_REDIRECT:
      return {
        ...state,
        redirectUrl:action.redirectUrl
      }
    default:
      return state
  }
}
