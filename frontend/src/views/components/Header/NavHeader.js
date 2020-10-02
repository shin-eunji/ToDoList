import React from 'react';
import styled from 'styled-components';
import {navLinks} from "./NavLinks";
import {Link} from "react-router-dom";

function NavHeader (props) {

    const {
    } = props;

    return (
        <Container>
            <Nav>
                <NavItem to={'/editorial'}>Editorial</NavItem>
                <NavItem>
                    {
                        navLinks.map((route, index) => <Item key={index} to={route.to}>{route.name}</Item>)
                    }
                </NavItem>
                <NavItem to={'/all'}>View all</NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  padding: 0 20px;
`
const Nav = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
`;
const NavItem = styled(Link)`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  color: #666;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 14px 0;
  &:nth-child(2){
    flex: 1;
    overflow-x: auto;
  }
`;
const Item = styled(Link)`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin: 10px 20px;
  color: #666;
  font-size: 15px;
  font-weight:600;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #111;
  }
`
export default NavHeader;