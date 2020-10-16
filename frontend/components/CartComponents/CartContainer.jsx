import { connect } from 'react-redux'
import { requestCart, addCartItem, removeCartItem } from '../../actions/cart_actions'
import CartComponent from './CartComponent'

const mSTP = state => ({
    cartItems: Object.values(state.entities.cart)
})

const mDTP = dispatch => ({
    requestCart: () => dispatch(requestCart()),
    addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
    removeCartItem: (id) => dispatch(removeCartItem(id))
})

export default connect(mSTP, mDTP)(CartComponent)