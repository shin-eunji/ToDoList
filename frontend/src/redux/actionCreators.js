import store from './store'
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'
import {Action as todoAction} from './todos/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const todoActions = bindActionCreators(todoAction.Creators, dispatch);
