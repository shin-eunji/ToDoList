import React from 'react';
import styled from 'styled-components';

import {AiOutlineSearch} from "react-icons/ai/index";
import Search from "../Search";
import Footer from "./Footer";

function Visual (props) {

    const {} = props;

    return (
        <Container>
            <Text>
                Unsplash
                <p>The internet’s source of <a href="">freely-usable images.</a> <br/>
                    Powered by creators everywhere.</p>
                <SearchContainer>
                    <Search/>
                </SearchContainer>
                <TagBoxBlock>
                    <h4>Trending:</h4>
                    <TagList tag={['태그1','태그2','태그3']}/>
                </TagBoxBlock>
            </Text>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  top: 100px;
  right: 0;
  left: 0;
  bottom: 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index: 1;
  background: url("https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1467&q=80") 50% 70% / cover no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.25);
    z-index: 10;
  }
`
const Text = styled.div`
  width: 800px;
  margin: 200px 0;
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  z-index: 100;
  p{
    font-size: 19px;
    font-weight: 500;
    margin: 20px 0 30px;
    line-height: 1.4;
    a {
      color: #fff;
      opacity: .8;
    }
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 6px 10px;
  border-radius: 5px;
`;
const TagBoxBlock = styled.div`
    font-size: 15px;
    font-weight: 600;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top: 20px;
`;
const TagList = styled.div`
    font-weight: 600;
    margin-left: 3px;
`;
export default Visual;