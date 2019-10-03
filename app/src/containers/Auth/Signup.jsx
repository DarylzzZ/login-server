import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.css'

import SignupForm from '../../components/Auth/SignupForm'
import authActions from '../../redux/auth/actions'

const { Content, Footer } = Layout

class Signup extends React.Component {
  render() {
    let { token } = this.props.Auth

    if (token) {
      return <Redirect to='/dashboard' />
    }
    return (
      <Layout className='layout'>
        <Content className='content'>
          <SignupForm handleSignup={this.props.signup} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by DarylzzZ</Footer>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    Auth: state.Auth
  }),
  { ...authActions }
)(Signup)
