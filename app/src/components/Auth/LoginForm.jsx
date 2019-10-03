import React from 'react'
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd'
import { Link } from 'react-router-dom'
import './LoginForm.css'

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { username, password } = values
        this.props.handleLogin(username, password)
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox
              onChange={() =>
                notification.open({
                  message: 'Not working :)',
                  duration: 2
                })
              }>
              Remember me
            </Checkbox>
          )}
          <Button
            className='login-form-forgot'
            type='link'
            onClick={() =>
              notification.open({
                message: 'Nothing happened :)',
                duration: 2
              })
            }>
            Forgot password
          </Button>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Log in
          </Button>
          Or <Link to='/signup'>register now!</Link>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm)

export default WrappedLoginForm
