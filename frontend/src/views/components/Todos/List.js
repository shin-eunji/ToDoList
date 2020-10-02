import React from 'react';
import styled from 'styled-components';
import Item from "./Item";

function TodoList (props) {

    const {
        data = [],
        render
    } = props;

    return (
        <Container>
            {
                data.map((item, index) => render(item, index))
            }
        </Container>
    )
}

const Container = styled.div`
`
export default TodoList;