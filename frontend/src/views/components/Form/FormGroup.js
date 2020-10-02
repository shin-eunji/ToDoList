import React from 'react';
import styled from 'styled-components';
import FormMessage from "./FormMessage";

function FormGroup (props) {

    const {
        label,
        name,
        placeholder,
        value,
        register,
        errorType,
        onChange = () => {},
        onEnter=() => {}

    } = props;


    return (
        <Container>
            <Label>{label}</Label>
            <Input name={name}
                   value={value}
                   ref={register}
                   placeholder={placeholder}
                   onChange={onChange}
                   onKeyUp={(e) => {
                       if(e.key === 'Enter') {
                           onEnter()
                       }
                   }}
            />
            <FormMessage errorType={errorType}/>

        </Container>
    )
}

const Container = styled.div`

`
const Label = styled.label`
    display:block;
    padding: 15px 0;
    font-size: 16px;
`;
const Input = styled.input`
    height: 46px;
    background: transparent;
    border: 1px solid #ddd;
    padding: 8px;
    -webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;
    -webkit-border-radius: none;-moz-border-radius: none;border-radius: none;
    width: 100%;
    display: inline-block;
    &:focus {
      outline: 0;
    }
`;
export default FormGroup;