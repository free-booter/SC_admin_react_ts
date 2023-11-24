import React from 'react'
import { LoginWrapper } from './style'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import Logo from '@/assets/images/logo.svg'
import { reqLogin } from '@/services/modules/login'
import { useSCMessage } from '@/hooks/useMessage'
import { useDispatch } from 'react-redux'
import { saveUserInfo } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

type FiledType = {
  username: string
  password: string
  remember: boolean
}

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (values: any) => {
    login(values.username, values.password)
  }

  const login = async (username: string, password: string) => {
    console.log(username, password)

    try {
      const res = await reqLogin(username, password)
      dispatch(saveUserInfo(res))
      navigate('/home')
    } catch (error) {
      useSCMessage.error(error as string)
    }
  }
  return (
    <LoginWrapper>
      <div className="login-wrapper">
        <div className="login-content">
          <div className="login-left">
            <img src={Logo} alt="" />
          </div>
          <div className="login-right">
            <div className="login-title">SecondBook Admin</div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Form.Item<FiledType>
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item<FiledType>
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item<FiledType>
                  name="remember"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Button className="forget-pwd" type="link" htmlType="button">
                  忘记密码
                </Button>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-btn">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </LoginWrapper>
  )
}

export default Login
