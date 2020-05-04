import React from "react";
import Input from "../lib/Input";
import { Button } from "antd";
import { RouteComponentProps } from "react-router-dom";

import { Input as AntInput, Form } from "antd";
import {NonAuthRoutes} from "../Routes";

type Props = {};

type FormFields = {
  email?: any;
  password?: any;
};

export default class Login extends React.Component<RouteComponentProps> {
  state = {
    loading: false
  };

  onChangeInput = (name: string) => (event: any) => {
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-container">
        <div className="screen-container">
          <div className="form-container">
            <div>
              <Form onFinish={this.onLogin}>
                <Form.Item name="email" style={{ marginBottom: 0 }}>
                  <Input
                    type="email"
                    className="mgb15"
                    placeholder={"Insira o seu e-mail"}
                  />
                </Form.Item>
                <Form.Item name="password" style={{ marginBottom: 0 }}>
                  <AntInput.Password
                    visibilityToggle={false}
                    className="mgb15"
                    placeholder={"Insira sua senha"}
                  />
                </Form.Item>

                <hr />
                <div className="flex align-center space-between">
                  <div>
                    <Form.Item>
                      <Button
                        loading={this.state.loading}
                        htmlType="submit"
                        type="primary"
                      >
                        LOGIN
                      </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onLogin = async ({ email, password }: FormFields) => {
    this.setState({ loading: true });
    this.setState({ loading: false });
    this.props.history.push("/dashboard");

  };
}
