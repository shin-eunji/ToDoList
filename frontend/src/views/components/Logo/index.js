import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Logo (props) {

    const {} = props;

    return (
        <Container path={'/'}>
            <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                 aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
            </svg>
            <Text>
                <h1>Unsplash</h1>
                <p>Photos for everyone</p>
            </Text>
        </Container>
    )
}

const Container = styled(Link)`
  display:flex;
  align-items:center;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 20px 20px 20px 0;
  text-decoration: none;
`
const Text = styled.div`
  margin-left: 10px;
  h1 {
    font-size: 18px;
    font-weight:bold;
    margin: 0;
  }
  p {
    margin: 0;
  }  
`;
export default Logo;