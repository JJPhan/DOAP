
import {
    RECEIVE_CART_ERRORS, 
    CLEAR_CART_ERRORS} from '../actions/cart_actions'


const cartErrorsReducer = ( state = [], action) => {

    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CART_ERRORS:
            return action.errors
        case CLEAR_CART_ERRORS:
            return []
        default:
            return state
    }
}


export default cartErrorsReducer