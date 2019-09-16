import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './index.css'
import SignupForm from '../../components/Auth/SignupForm'

const { Content, Footer } = Layout

class Login extends React.Component {
  render() {
    return (
      <Layout className='layout'>
        <Content className='content'>
          <SignupForm />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by DarylzzZ</Footer>
      </Layout>
    )
  }
}

export default Login
