import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Home from "./views/pages/Home";
import Todos from "./views/pages/Todos";
import Login from "./views/pages/Login";


function Routes (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/'} component={Home}></Route>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/todo'} component={Todos}></Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Routes;