import {all} from 'redux-saga/effects'
import appSaga from './app/saga'
import todosSaga from './todos/saga'

export default function*() {
    yield all([
        appSaga(),
        todosSaga()
    ])
}