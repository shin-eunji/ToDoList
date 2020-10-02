import React from 'react';
import styled from 'styled-components';
import {appActions} from "../../../redux/actionCreators";

function PopupMore (props) {

    const {} = props;


    return (
        <Container onClick={() => {
            appActions.updateState({
                handlePopup: false
            })}
        }>
            More
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 150px;
  width: 200px;
  height: 300px;
  background: #000;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #000;
  }
`
export default PopupMore;