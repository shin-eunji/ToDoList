import React from 'react';
import styled from 'styled-components';

function PhotoPopup (props) {

    const {
        handleDetail
    } = props;

    return (
        <Container onClick={() => {
            handleDetail(false)
        }}>

        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  display:flex;
  align-items:center;
  justify-content:center;
  color: #fff;
  font-size: 30px;
  z-index: 2000;
  cursor: zoom-out;
`
export default PhotoPopup;