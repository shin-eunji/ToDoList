
import React from 'react';
import styled from 'styled-components';
import TodoForm from "../../containers/Todos/TodoForm";

function Write (props) {

    const {} = props;

    return (
        <Container>
            <TodoForm/>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`

export default Write;