import React from 'react';
import styled from 'styled-components';

function FormGroup (props) {

    const {
        label,
        onChange,
        name
    } = props;

    return (
        <Container>
            <Label>
                <LabelText>{label}</LabelText>
                <FormControl>
                    <Input type="text"
                           onChange={onChange}
                           name={name}
                    />
                </FormControl>
            </Label>
        </Container>
    )
}

const Container = styled.div`
`
const Label = styled.label`
    
`;
const LabelText = styled.span`
    display:block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
    font-weight: 500;
    height: 50px;
`;
const FormControl = styled.div`
    border-bottom: 1px solid #000;
    
`;
const Input = styled.input`
    border: 0;
    background: none;
    display:block;
    width: 100%;
    box-shadow: none;
    outline: 0;  
    height: 50px;
`;
export default FormGroup;