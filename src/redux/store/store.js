import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { aimsReducer } from '../reducers/aimsReducer';
import { loginReducer } from '../reducers/loginReducer';
import { redeemReducer } from '../reducers/redeemReducer';
import { registerReducer } from '../reducers/registerReducer';
import { tipsReducer } from '../reducers/tipsReducer';
import { userReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    aims: aimsReducer,
    tips: tipsReducer,
    redeem: redeemReducer, 
    user: userReducer
})
export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)