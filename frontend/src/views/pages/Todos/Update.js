import React from 'react';
import styled from 'styled-components';
import TodoForm from "../../containers/Todos/TodoForm";
import {useSelector} from "react-redux";
import {todoActions} from "../../../redux/actionCreators";

function Update (props) {

    const {
        match
    } = props;

    const id = match.params.id;

    const {detail} = useSelector(state => state.todos)

    const onSubmit = (data) => {
        todoActions.updateTodo(id, data)
    }

    return (
        <Container>
            <TodoForm onSubmit={onSubmit}
                      defaultData={detail[id]}
            />
        </Container>
    )
}

const Container = styled.div`
`
export default Update;