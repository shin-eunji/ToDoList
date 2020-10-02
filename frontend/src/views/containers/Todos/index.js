import React, {useEffect} from 'react';
import styled from 'styled-components';
import TodoList from "../../components/Todos/List";
import Item from "../../components/Todos/Item";
import {useSelector} from "react-redux";
import Header from "../../components/Header";
import {navigate} from "../../../lib/History";
import Button from "../../components/Button";

function TodosContainers (props) {

    const {
    } = props;

    const {list} = useSelector(state => state.todos)

    useEffect(() => {}, [])

    return (
        <Container>
            <Header/>
            <TodoList data={list}
                      render={(item, index) => <Item key={index} {...item} />}
            />
            <AddButton onClick={() => navigate('/todo/write')}>추가!!!</AddButton>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  top: 200px;
  left: 0;
  display:flex;
  align-items:flex-start;
  justify-content:center;
`
const AddButton = styled(Button)`
  position:fixed;
  right: 30px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  background: #09c6ab;
  border-radius: 300px;
  color: #fff;
  font-weight:bold;
  font-size: 16px;
  border: none;
  text-align:center;
  cursor: pointer;
`;
export default TodosContainers;