import {combineReducers} from 'redux'
import { CartReducer } from './com-operations/cart/CartReducer'

export const rootReducer=combineReducers({
    cart:CartReducer
})
