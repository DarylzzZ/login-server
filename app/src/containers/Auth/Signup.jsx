import React from 'react'
import { Box } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import authActions from '../../redux/auth/actions'

class Signup extends React.Component {
  render() {
    let { token } = this.props.Auth

    if (token) {
      return <Redirect to="/dashboard" />
    }
    return <Box></Box>
  }
}

export default connect(
  (state) => ({
    Auth: state.Auth
  }),
  { ...authActions }
)(Signup)
