import styled from 'styled-components'

export const ButtonGroup = styled.div`
    display:flex;
    justify-content: flex-end;
    padding: 20px;
    
`;
export const Button = styled.button`
    height: 42px;
    padding: 0 20px;
    font-size: 14px;
    color: #333;
    background: #fff;
    -webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;
    outline: 0;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    border: 0;
    & + & {
      margin-left: 8px;
    }
    
    ${props => props.size === 'sm' && `
        height: 33px;
        font-size: 11px;
        padding: 0 10px;
    `}
   
    
    ${props => props.sort === 'info' && `
        background: #ddd;
        color: #333;
    `}
    
    ${props => props.sort === 'danger' && `
        background: #ff0000;
        color: #fff;
    `}
    
    ${props => props.sort === 'primary' &&`
        background: #2ab7fd;
        color: #fff;   
    `}
`;