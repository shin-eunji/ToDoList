import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";

function Button (props) {

    const {
        onClick,
        text
    } = props;

    return (
        <Container onClick={onClick}>
            {text}
            <TodoButton onClick={() => {
                navigate('/todo')
            }}>추가</TodoButton>
        </Container>
    )
}

const Container = styled.div`
`
const TodoButton = styled.button`
    display:block;
    width: 800px;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #fff;
    background: #09c6ab;
    font-size: 18px;
    font-weight:bold;
    border: none;
    box-shadow: none;
    margin-top: 30px;
`;
export default Button;
