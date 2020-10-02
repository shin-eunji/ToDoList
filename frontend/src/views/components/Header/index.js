import React from 'react';
import styled from 'styled-components';

import TopHeader from "./TopHeader";
import NavHeader from "./NavHeader";

function Header (props) {

    const {} = props;

    return (
        <Container>
            <TopHeader/>
            <NavHeader/>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
  background: #fff;
  z-index: 1000;
`;
export default Header;