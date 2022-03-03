import React from "react";
import {Button, Form, Input} from "antd";

class FooterNewsletterForm extends React.Component<any, any>{

    render() {
        return (
            <div>
                <Form
                    style={{display: 'flex'}}
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
                        <Input placeholder="email address"/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Subscribe
                    </Button>
                </Form>
            </div>
        );
    }

}

export default FooterNewsletterForm;
