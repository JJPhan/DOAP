import {IS_CART_OPEN} from '../../actions/cart_actions'

const CartWindowReducer = (state = {cartWindowOpen: false}, action) => {
    switch(action.type) {
        case IS_CART_OPEN: 
            return { cartWindowOpen: action.is_open}
        default:
            return state
    }
}

export default CartWindowReducer