import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'

const { Content, Footer } = Layout

class Dashboard extends React.Component {
  render() {
    console.log(this.props)

    let { token, user } = this.props.Auth
    if (!token) {
      return <Redirect to='/login' />
    }
    return (
      <Layout className='layout'>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Hello, {user.username} !
          </div>
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
  {}
)(Dashboard)
