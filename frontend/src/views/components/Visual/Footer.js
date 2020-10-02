import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Footer (props) {

    const {} = props;

    return (
        <Container>
            <Text>
                <TextLink>Photo of the Day</TextLink> by <TextLink>Derick Daily</TextLink>
            </Text>
            <Text>
                Read more about the <TextLink>Unsplash License</TextLink></Text>
            <Text>
                <TextLink>All you need to create a website.</TextLink>
            </Text>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  font-size: 15px;
  font-weight: 500;
  z-index: 1000;
  color: rgba(255,255,255,.6);
`
const Text = styled.div`
    
`;
const TextLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;
export default Footer;