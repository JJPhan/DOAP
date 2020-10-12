

export const IS_CART_OPEN = "IS_CART_OPEN";
// export const IS_CART_CLOSED = "IS_CART_CLOSED";

export const openCartWindow = (is_open) => {
    return ({
        type: IS_CART_OPEN,
        is_open
    })
}
