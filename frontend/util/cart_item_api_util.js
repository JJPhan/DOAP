export const fetchCartItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/cart_items"
    })
)

export const addCartItem = (cartItem) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/cart_items",
            data: { cartItem: cartItem}
        })
    )
}

export const removeCartItem = (cartItemId) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/cart_items/${cartItemId}`
        })
    )
}


