export const fetchCartItems = () => (
    $.ajax({
        method: "GET",
        url: "/api/cart_items"
    })
)

// camel vs snake case -> camel case did not work....?
export const addCartItem = (cart_item) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/cart_items",
            data: { cart_item: cart_item}
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


