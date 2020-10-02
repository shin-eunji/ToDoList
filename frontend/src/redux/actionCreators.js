import store from './store'
import {bindActionCreators} from "redux";

import {appAction} from './app/redux'

const dispatch = store.dispatch;

const appActions = bindActionCreators(appAction.Creators.updateState, dispatch);



export default appActions;