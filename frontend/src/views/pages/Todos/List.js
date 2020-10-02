
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {todoActions} from "../../../redux/actionCreators";
import TodosContainers from "../../containers/Todos";

function List (props) {

    const {} = props;

    useEffect(() => {
        todoActions.getTodos()
    }, [])

    return (
        <Container>
            <TodosContainers/>
        </Container>
    )
}

const Container = styled.div`
`
export default List;