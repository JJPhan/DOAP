import * as CartAPIUtil from '../util/cart_item_api_util'

export const IS_CART_OPEN = "IS_CART_OPEN";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_CART = "RECEIVE_CART";
export const DESTROY_CART_ITEM = "DESTORY_CART_ITEM";

export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";
export const CLEAR_CART_ERRORS = "CLEAR_CART_ERRORS"

export const openCartWindow = (is_open) => {
    return ({
        type: IS_CART_OPEN,
        is_open
    })
}

const createCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
})

const deleteCartItem = (id) => ({
    type: DESTROY_CART_ITEM,
    id
})

const receiveCartError = (errors) => {
    return ({
        type: RECEIVE_CART_ERRORS,
        errors
    })
}

export const clearCartErrors = () => ({
    type: CLEAR_CART_ERRORS
})
 

export const requestCart = () => dispatch => {
    return (
        CartAPIUtil.fetchCartItems()
            .then( (cart) => dispatch(receiveCart(cart)))
    )
}

export const addCartItem = (cartItem) => dispatch => {
    return ( CartAPIUtil.addCartItem(cartItem)
    .then(cartItem => { 
        return (dispatch(createCartItem(cartItem)))}))
        // err => (
        //     dispatch(receiveCartError(err.responseJSON))
        // )
}

export const removeCartItem = (id) => dispatch => {
    return ( CartAPIUtil.removeCartItem(id)
    .then(() => dispatch(deleteCartItem(id))))
}
