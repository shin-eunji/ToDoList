import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from '../todos/redux'
import API from "../../api";
import {navigate} from "../../lib/History";


export default function* () {
    yield all([
        takeLatest(Action.Types.GET_TODOS, function* () {
            const result = yield call(API.getTodos)
            console.log("[saga] getTodos", result);

            yield put(Action.Creators.updateState({
                list: result
            }))
        }),
        takeLatest(Action.Types.ADD_TODO, function* ({data}) {
            const result = yield call(API.addTodo, data)
            console.log("[saga] addTodo", result);

            if(result) {
                navigate('/todo')
            }
        }),
        takeLatest(Action.Types.GET_TODO_BY_ID, function* ({id}) {
            const result = yield call(API.getTodoById, id)
            console.log("[saga] getTodoById", result);

            if(result) {
                yield put(Action.Creators.updateTodoDetail(id, result))
            }
        }),
        takeLatest(Action.Types.UPDATE_TODO, function* ({id, data}) {
            const result = yield call(API.updateTodo, id, data)
            console.log("[saga] updateTodo", result);

            if(result) {
                navigate('/todo')
            }
        }),
        takeLatest(Action.Types.DELETE_TODO, function* ({id}) {
            const result = yield call(API.deleteTodo, id)
            console.log("[saga] updateTodo", result);

            if(result) {
                navigate('/todo')
            }
        })
    ])
}