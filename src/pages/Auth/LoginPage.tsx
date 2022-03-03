import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const mainContainerStyle = css`
    width: 40%;
    padding: 5%;
    margin: auto;
    font-size: 16px;
`;

export const LoginPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return(
        <>
            <div css={mainContainerStyle}>
                <h1 css={css`text-align: center;`}>Sign In</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot float-right" css={css`float: right;`} href="">
                            Forgot password?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block={true}>
                            Sign in
                        </Button>
                        <span css={css`float: right;`}>
                            Don't have an account? <Link to="/register">register now!</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
