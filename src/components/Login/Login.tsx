import React from "react";
import Input from "../lib/Input";
import {Alert, Button} from "antd";
import {RouteComponentProps} from "react-router-dom";

import {Input as AntInput, Form} from "antd";
import {AuthenticationAPI} from "../../lib/API";

type FormFields = {
    email?: any;
    password?: any;
};

export default class Login extends React.Component<RouteComponentProps> {
    state = {
        loading: false,
        error: undefined
    };

    render() {
        const {error} = this.state
        return (
            <div className="login-container">
                <div className="screen-container">
                    <div className="form-container">
                        <div>
                            <img
                                src={"./assets/img/logo.png"}
                                className="logo"
                                alt="Southsystem"
                            />
                            <Form onFinish={this.onLogin}>
                                <Form.Item name="email" style={{marginBottom: 0}}>
                                    <Input
                                        type="email"
                                        className="mgb15"
                                        placeholder={"Insira o seu e-mail"}
                                    />
                                </Form.Item>
                                <Form.Item name="password" style={{marginBottom: 0}}>
                                    <AntInput.Password
                                        visibilityToggle={false}
                                        className="mgb15"
                                        placeholder={"Insira sua senha"}
                                    />
                                </Form.Item>
                                {error && <Alert message={error} type="error"/>}
                                <hr/>
                                <div className="flex align-center end">
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

    onLogin = async ({email, password}: FormFields) => {
        this.setState({loading: true});
        this.setState({loading: false});
        const success = AuthenticationAPI.login(email, password)
        if (success)
            this.props.history.push("/dashboard");
        else
            this.setState({error: "Senha incorreta"})


    };
}
