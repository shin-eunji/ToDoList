import React from 'react';
import styled from 'styled-components';

function FormMessage (props) {

    const {
        errorType
    } = props;
    
    return (
        <Container>
            {
                errorType === 'required' && '필수 입력 사항 입니다.'
            }
        </Container>
    )
}

const Container = styled.div`
  color: #ae0202;
`
export default FormMessage;