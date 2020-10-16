import { 
    RECEIVE_CART_ITEM, 
    RECEIVE_CART, 
    DESTROY_CART_ITEM } from '../../actions/cart_actions'

const CartReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart;
        case RECEIVE_CART_ITEM:
            // nextState[action.cartItem] = action.cartItem
            nextState = { ...nextState, ...action.cartItem} 
            return nextState;
        case DESTROY_CART_ITEM:
            delete nextState[action.id]
            return nextState
        // case RECEIVE_CURRENT_USER
        default: 
            return state;
    }
}

export default CartReducer