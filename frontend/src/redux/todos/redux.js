import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    list: [],
    detail: {}
}

export const Action = createActions({
    updateState: ['state'],
    getTodos: null,
    addTodo: ['data'],
    getTodoById: ['id'],
    updateTodoDetail: ['id', 'todo'],
    updateTodo: ['id', 'data'],
    deleteTodo: ['id'],
    handlePopconfirm: null
}, {prefix: 'TODO/'})

export const reducer = createReducer(initialState,{
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
    [Action.Types.UPDATE_TODO_DETAIL]: (state, {id, todo}) => ({
        ...state,
        detail: {
            [id]: todo
        }
    }),
})


