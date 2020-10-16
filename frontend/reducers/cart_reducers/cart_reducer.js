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
            nextState[action.cartItem.id] = action.cartItem
            return nextState;
        case DESTROY_CART_ITEM:
            delete nextState[action.id]
            return nextState
        default: 
            return state;
    }
}

export default CartReducer