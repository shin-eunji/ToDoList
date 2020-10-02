import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import FormGroup from "./FormGroup";


function LoginForm (props) {

    const {
    } = props;

    const {register, errors, watch, handleSubmit} = useForm();
    const [value, setValue] = useState([])
    const onsubmit = () => {

    }

    return (
        <Container handleSubmit={onsubmit}>
            <FormGroup name='email'
                       label='Email'
                       type='text'
                       placeholder=''
                       register={register({required: true})}
                       errorType={errors?.email?.type}
                       onChange={(e) => {
                           setValue({
                               ...value,
                               email: e.target.value
                           })
                       }}
            />

            <FormGroup name='password'
                       label='Password'
                       s
                       placeholder=''
                       register={register({required: true})}
                       errorType={errors?.password?.type}
                       onChange={(e) => {
                           setValue({
                               ...value,
                               password: e.target.value
                           })
                       }}
            />
            <Button onClick={() => {
                console.log("value", value);
            }}>Login</Button>
        </Container>
    )
}
const Container = styled.div`
  position:relative;
  top: 0;
  
`;
const Button = styled.button`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
`;
export default LoginForm;