import React, {useEffect} from 'react';
import styled from 'styled-components';
import {ButtonGroup} from "../../components/Button/Button.styled";
import {navigate} from "../../../lib/History";
import {useSelector} from "react-redux";
import {todoActions} from "../../../redux/actionCreators";
import PopupConfirm from "../../components/Popconfirm";

function Detail (props) {

    const {
        match
    } = props;

    const id = match.params.id

    const {detail} = useSelector(state => state.todos)
    const todo = detail[id]

    console.log("todo", todo);

    useEffect(() => {
        if(!todo) {
            todoActions.getTodoById(id)
        }
    }, [])

    const popconfirm = () => {
        todoActions.handlePopconfirm('정말 삭제하시겠습니까?')
    }

    const onDelete = () => {
        todoActions.deleteTodo(id)
    }



    return (
        <Container>
            <ButtonGroup>
                <Button onClick={() => navigate(`/todo/update/${id}`)}>수정</Button>
                <Button onClick={popconfirm}>삭제</Button>
            </ButtonGroup>
            <h2>{todo?.title}</h2>
            <p>{todo?.body}</p>

            {
                popconfirm.title &&
                <PopupConfirm {...popconfirm} onDelete={onDelete} />
            }
        </Container>
    )
}

const Container = styled.div`
`
const Button = styled.button`
    
`;
export default Detail;