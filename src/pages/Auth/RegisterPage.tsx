import React from 'react';
import { Link } from "react-router-dom";
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
} from 'antd';

import {css} from "@emotion/react";

const mainContainerStyle = css`
    width: 40%;
    padding: 5%;
    margin: auto;
    font-size: 16px;
`;

export const RegisterPage: React.FC = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    // @ts-ignore
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <option value={88} selected>+88</option>
            </Select>
        </Form.Item>
    );

    return(
        <>
            <div css={mainContainerStyle}>
                <h1 css={css`text-align: center;`}>Sign Up</h1>
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Confirm password"/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="Phone" />
                    </Form.Item>


                    <Form.Item
                        name="address"
                        rules={[{ required: true, message: 'Please input Address' }]}
                    >
                        <Input.TextArea showCount maxLength={100} placeholder="Address"/>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}
                    >
                        <Checkbox>
                            I accept to the <a href="">Terms and Conditions </a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block={true}>
                            Sign Up
                        </Button>
                    </Form.Item>
                    <div css={css`float: right;`}>
                        Already Have an account? <Link to="/login">Sign in</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}
