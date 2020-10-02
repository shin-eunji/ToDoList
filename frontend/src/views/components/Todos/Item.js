import React from 'react';
import styled from 'styled-components';

function Item (props) {

    const {
        title,
        body
    } = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Container>
    )
}

const Container = styled.div`
  width: 800px;
  padding: 30px;
  background: #fff;
  margin: 30px 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,.05);
`
const Title = styled.div`
  color: #333;
  font-size: 18px;
  font-weight:bold;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const Body = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #777;
`;
export default Item;