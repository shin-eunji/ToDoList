import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    list: []
}

export const Action = createActions({
    updateState: ['state'],
    getTodos: null,
    addTodo: ['data']
}, {prefix: 'TODO/'})

export const reducer = createReducer(initialState,{
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    })
})


