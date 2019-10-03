const actions = {
  SET_REDIRECT: 'SET_REDIRECT',

  setRedirect: redirectUrl => ({
    type: actions.SET_REDIRECT,
    redirectUrl
  })
}

export default actions
