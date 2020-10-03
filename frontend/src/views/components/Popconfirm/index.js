import React from 'react';
import styled from 'styled-components';
import {ButtonGroup} from "../Button/Button.styled";
import Button from "../Button";
import {todoActions} from "../../../redux/actionCreators";

function PopupConfirm(props) {

    const {
        title,
        onDelete
    } = props;

    const onCancel = () => {
        todoActions.handlePopconfirm('')
    }

    const onConfirmDelete = () => {
        onDelete()
        onCancel()
    }

    return (
        <Container onClick={e => e.stopPropagation()}>
            <h2>{title}</h2>
            <ButtonGroup>
                <Button sort={"info"} size={'sm'} onClick={onCancel}>취소</Button>
                <Button sort={"danger"} size={'sm'} onClick={onConfirmDelete}>확인</Button>
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`
`
export default PopupConfirm;