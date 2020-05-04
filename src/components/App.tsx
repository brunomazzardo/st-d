import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AuthRoutes, NonAuthRoutes} from "./Routes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login/Login";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import {Layout} from "antd";
import Courses from "./Courses/Courses";
import EditCourse from "./Courses/EditCourse";
import NestRoutes from "./NestRoutes";
import Employees from "./Employees/Employees";
import Classes from "./Class/Classes";
import ClassCentral from "./Class/ClassCentral/ClassCentral";
import {ConfigProvider} from "antd";
import ptBR from "antd/es/locale/pt_BR";
import Socket from "./lib/SocketContext";
import PasswordRecovery from "./Login/PasswordRecovery";


const antConfig = {
    locale: ptBR
};


class App extends React.Component {
    render() {
        return (
            <ConfigProvider {...antConfig}>
                <BrowserRouter>
                    <Switch>
                        <Route path={NonAuthRoutes.login} component={Login}/>
                        <Route path={NonAuthRoutes.passwordRecovery} component={PasswordRecovery}/>
                        <ProtectedRoutes>
                            <Socket>
                                <Header/>
                                <Layout className="sidebar-container">
                                    <Sidebar/>
                                    <Layout className="content-layout">
                                        <Switch>
                                            <NestRoutes path={AuthRoutes.courses}>
                                                <Route component={Courses} path={"/cursos/"} exact/>
                                                <Route
                                                    component={EditCourse}
                                                    path={"/cursos/adicionar"}
                                                    exact
                                                />
                                            </NestRoutes>
                                            <NestRoutes path={AuthRoutes.class}>
                                                <Route
                                                    component={Classes}
                                                    path={AuthRoutes.class}
                                                    exact
                                                />
                                                <Route
                                                    component={ClassCentral}
                                                    path={AuthRoutes.classCentral}
                                                    exact
                                                />
                                            </NestRoutes>
                                            <Route
                                                component={Employees}
                                                path={AuthRoutes.employees}
                                                exact
                                            />
                                            <Redirect to={AuthRoutes.courses}/>
                                        </Switch>
                                    </Layout>
                                </Layout>
                            </Socket>
                        </ProtectedRoutes>
                    </Switch>
                </BrowserRouter>
            </ConfigProvider>
        );
    }
}

export default App;
