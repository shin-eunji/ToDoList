import React from 'react';
import styled from 'styled-components';
import LoginForm from "../../components/Form/LoginForm";

function Login (props) {

    const {} = props;

    return (
        <Container>
            <Text>
                <h3>Login</h3>
                <p>Welcome back.</p>
            </Text>
            <LoginForm/>
            <PasswordText>Forgot your password?</PasswordText>
            <JoinText>Don't have a account? Join</JoinText>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height: 100vh;
  
`
const Text = styled.div`
  text-align:center;
  * {
    margin-bottom: 20px;
  }
  h3 {
    font-size: 30px;
    font-weight: 800;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
const PasswordText = styled.div`
    position:relative;
    right: -70px;
    top: -118px;
    color: #666;
    text-decoration: underline;
`;
const JoinText = styled.div`
  margin: 30px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
export default Login;