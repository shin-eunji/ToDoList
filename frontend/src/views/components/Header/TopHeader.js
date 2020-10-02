import React from 'react';
import styled from 'styled-components';
import Logo from "../Logo";
import Search from "../Search";
import Nav from "../Nav";

function TopHeader (props) {

    const {} = props;

    return (
        <Container>
            <Logo/>
            <SearchContainer>
                <Search/>
            </SearchContainer>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 20px;
`
const SearchContainer = styled.div`
  background: #efefef;
  flex: 1;
  border-radius: 50px;
`;
export default TopHeader;