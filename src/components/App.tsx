import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AuthRoutes, NonAuthRoutes} from "./Routes";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login/Login";
import Header from "./Header";
import {Layout} from "antd";
import {ConfigProvider} from "antd";
import ptBR from "antd/es/locale/pt_BR";
import DragonList from "./Dragon/List";


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
                        <ProtectedRoutes>
                                <Header/>
                                <Layout className="sidebar-container">
                                    <Layout className="content-layout">
                                        <Switch>
                                                <Route component={DragonList} path={AuthRoutes.list} exact/>
                                            <Redirect to={AuthRoutes.list}/>
                                        </Switch>
                                    </Layout>
                                </Layout>
                        </ProtectedRoutes>
                    </Switch>
                </BrowserRouter>
            </ConfigProvider>
        );
    }
}

export default App;
