import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from "react-router-dom";
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
import Update from "./Update";

function Todos (props) {

    const {} = props;

    return (
        <Container>
            <Switch>
                <Route exact path={'/todo'} component={List}/>
                <Route path={'/todo/write'} component={Write}/>
                <Route path={'/todo/update/:id'} component={Update}/>
                <Route path={'/todo/detail/:id'} component={Detail}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
`
export default Todos;