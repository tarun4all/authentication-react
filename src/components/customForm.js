import React, { Component } from 'react';
import { Tabs, Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class CustomForm extends Component {
  
  constructor(props) {
    super(props);
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let conf = JSON.parse(localStorage.getItem('users'));
        if(conf.username == values.username && conf.password == values.password) {
          this.props.login(values.username);
        } else {
          console.log('Username or password incorrect');
        }
      }
    });
  }

  handleSignup = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let data = {
          username : values.username,
          password : values.password
        };
        localStorage.setItem('users',JSON.stringify(data));
        this.props.login(values.username);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Login" key="1">
              <Form onSubmit={this.handleLogin} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Sign Up" key="2">
            <Form onSubmit={this.handleSignup} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(CustomForm);

export default WrappedNormalLoginForm;
