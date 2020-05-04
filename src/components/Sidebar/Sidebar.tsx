import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ReadOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { AuthRoutes } from "../Routes";

const { Sider } = Layout;

const SidebarItems = [
  // { name: "Dashboard", icon: DashboardOutlined, to: AuthRoutes.dashboard },
  { name: "Cursos", icon: ReadOutlined, to: AuthRoutes.courses },
  { name: "Turmas", icon: ClockCircleOutlined, to: AuthRoutes.class },
  { name: "Funcionários", icon: TeamOutlined, to: AuthRoutes.employees },
  // { name: "Relatórios", icon: PieChartOutlined, to: AuthRoutes.reports }
];

const SidebarLink = (props: { name: string; to: string }) => {
  return (
    <>
      <span>{props.name}</span>
      <Link to={props.to} />
    </>
  );
};

class Sidebar extends React.Component<RouteComponentProps> {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    const { pathname } = this.props.location;
    const basePath = pathname
      .split("/")
      .slice(0, 2)
      .join("/");
    return (
      <Sider
        className="sidebar-menu-container"
        style={{ background: "#fff" }}
        width={195}
        collapsible
        breakpoint="lg"
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[basePath]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {SidebarItems.map(item => {
            const Icon = item.icon;
            return (
              <Menu.Item key={item.to}>
                <Icon />
                <SidebarLink to={item.to} name={item.name} />
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
