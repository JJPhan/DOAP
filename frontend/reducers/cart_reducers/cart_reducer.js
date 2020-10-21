import { 
    RECEIVE_CART_ITEM, 
    RECEIVE_CART, 
    DESTROY_CART_ITEM } from '../../actions/cart_actions'

const CartReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CART:
            console.log("test a")
            console.log(action.cart)
            return action.cart;
        case RECEIVE_CART_ITEM:
            console.log(action.cartItem)
            // return nextState = { ...nextState, ...action.cartItem } 
            // return Object.assign{ {}, state, action.cartItem}
            nextState[action.cartItem.id] = action.cartItem
            return nextState
        case DESTROY_CART_ITEM:
            delete nextState[action.id]
            return nextState
        default: 
            return state;
    }
}

export default CartReducer