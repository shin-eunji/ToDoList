import React from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis} from "react-icons/ai";
import {Button} from "../Button/Button.styled";
import {Link} from "react-router-dom";
import {navigate} from "../../../lib/History";
import PopupMore from "../Popup/More";
import {useSelector} from "react-redux";
import {appActions} from '../../../redux/actionCreators'

function Nav (props) {

    const {
        handlePopup
    } = props;

    const app = useSelector(state => state.app);


    return (
        <Container>
            <NavItem>Topics</NavItem>
            <NavItem>Explore</NavItem>
            <NavItem onClick={() => appActions.updateState({
                handlePopup: !handlePopup
            })}>
                <AiOutlineEllipsis className={"more"}/>
            </NavItem>
            {
                app && <PopupMore handlePopup={handlePopup}/>
            }
            <Button>
                <SubmitButton>Submit a photo</SubmitButton>
            </Button>
            <NavItem onClick={() => navigate('/login')}>Login</NavItem>
            <Button onClick={() => navigate('/todo')}>
                <JoinButton>Join free</JoinButton>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;  
  margin-left: 20px;
`
const NavItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;
  background: none;
  border: none; 
  padding: 10px 6px;
  font-size: 15px;
  color: #666;
  text-decoration: none;
  .more {
    font-size: 24px;
    font-weight:bold;
    transition: .2s;
    
  }
`;
const SubmitButton = styled.div`
  color: #666;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 8px 12px;
`;
const JoinButton = styled.button`
  background: #45b06e;
  border: 1px solid #45b06e;
  padding: 8px 12px;
  color: #fff;
  border-radius: 5px;
  border: none;
  
`;
export default Nav;