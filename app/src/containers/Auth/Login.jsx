import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import 'antd/dist/antd.css'
import './index.css'

import LoginForm from '../../components/Auth/LoginForm'
import authActions from '../../redux/auth/actions'



const { Content, Footer } = Layout

class Login extends React.Component {
  render() {

    return (
      <Layout className='layout'>
        <Content className='content'>
          <LoginForm onLogin={this.props.login} />
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
)(Login)
