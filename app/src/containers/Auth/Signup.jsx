import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import 'antd/dist/antd.css'
import './index.css'

import SignupForm from '../../components/Auth/SignupForm'
import authActions from '../../redux/auth/actions'

const { Content, Footer } = Layout

class Signup extends React.Component {
  render() {
    return (
      <Layout className='layout'>
        <Content className='content'>
          <SignupForm onSignup={this.props.signup} />
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
