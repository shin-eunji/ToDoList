import React, {useState} from 'react';
import styled from 'styled-components';
import FormGroup from "../../components/Form/FormGroup";
import {navigate} from "../../../lib/History";
import Button from "../../components/Button";
import {todoActions} from "../../../redux/actionCreators";

function TodoForm (props) {

    const {} = props;

    const [values, setValue] = useState({})

    const onChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitTodo = () => {
        console.log("values", values);
        todoActions.addTodo(values)
    }


    return (
        <Container>
            <form>
                <FormGroup label="title"
                           onChange={onChange}
                           name="title"

                />
                <FormGroup label="Description"
                           onChange={onChange}
                           name="body"

                />
                <AddButton onClick={submitTodo}>추가!!!</AddButton>
            </form>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`
const AddButton = styled(Button)`
    
`;
export default TodoForm;