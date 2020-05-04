import React from 'react';
import {Button, Form} from "antd";
import Input from "../lib/Input";
import {Link} from "react-router-dom";
import {NonAuthRoutes} from "../Routes";


const PasswordRecovery = () => {


  const [fields, setFields] = React.useState([]);

  const [form] = Form.useForm();
  return (
    <div className="login-container">
      <div className="screen-container">
        <div className="form-container">
          <div>
            <Form onFinish={() => {
            }} form={form}>
              <img
                src={"./assets/img/logo-compliance-total.png"}
                className="logo"
                alt="Compliance Total"
              />
              <Form.List name="recovery">
                {(fields, {add, remove}) => {
                  return (
                    <div>
                      {fields.map((field, index) => (
                        <Form.Item label={field.name}
                          required={!!field.name}
                          key={field.key}
                        >


                        </Form.Item>)
                      )}</div>)
                }}
              </Form.List>


              <Form.Item name="email" style={{marginBottom: 0}}>
                <Input
                  type="email"
                  className="mgb15"
                  placeholder={"Insira o seu e-mail"}
                />
              </Form.Item>
              <hr/>
              <div className="flex align-center space-between">
                <div>
                  <Link to={NonAuthRoutes.login} className="fs-20">
                    Lembrou? Entre aqui.
                  </Link>
                </div>
                <div>
                  <Form.Item>
                    <Button
                      loading={false}
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
};

export default PasswordRecovery;