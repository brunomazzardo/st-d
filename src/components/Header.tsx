import React, { Component } from "react";
// @ts-ignore
import { Authentication } from "@compliance-total/react-lib";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";

class Header extends Component<RouteComponentProps> {
  onClickLogout = () => {
    Authentication.logout();
    this.props.history.push("/login");
  };

  get userMenu() {
    return (
      <Menu onClick={this.onClickLogout}>
        <Menu.Item key="0">
          <div className="flex">
            <div className="mgr10">
              <LogoutOutlined />
            </div>
            Sair
          </div>
        </Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <div className="header-container">
        <div className="flex">
          <div className="header-logo-container">
            <img
              className="header-logo"
              src="./assets/img/logo-compliance-total.png"
              alt="Compliance Total"
            />
          </div>
          <div className="header-separator" />
          <h1 className="phase-title">I-Plus</h1>
        </div>
        <div className="header-user-dropdown-container">
          <Dropdown
            placement="bottomRight"
            overlay={this.userMenu}
            trigger={["click"]}
          >
            <div className="header-info-container">
              <div className="header-user-icon-container">
                <UserOutlined />
              </div>
              <div className="header-user-details">
                <span style={{ fontWeight: 500 }}>
                  {Authentication.getUserName()}
                </span>
                <div style={{ fontWeight: 300 }}>
                  {Authentication.getCompanyName()}
                </div>
              </div>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
