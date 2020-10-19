import React from 'react'
import { Link } from 'react-router-dom'

class CartComponent extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.requestCart()
    }

    render() {

        let totalPrice = 0
        this.props.cartItems.map(items => totalPrice += items.sneakerPrice)

        return(
            <div className="shopping-cart">
                <div className="left-cart-window">
                    <ul className="cart-list">
                        { this.props.cartItems.map(items => 
                            // return (
                            <div>
                                <br />
                                shopping cart
                                <br />
                                {items.sneakerName} 
                                <br />
                                {items.sneakerSize} 
                                <br />     
                                ${items.sneakerPrice}
                                <br />
                                SKU {items.sneakerSku}
                                <Link to={`/sneakers/${items.sneakerId}`}>  <img className="sneaker-cart-img" src={`${items.sneakerPhoto}`} /></Link> 
                                <button onClick={() => this.props.removeCartItem(items.id)}> delete </button>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="right-cart-window">
                    <div className="checkout-info-container">
                        <div className="checkout-header">Order Summary</div>
                        <div className="checkout-info"> 
                            <div> ship to: </div>
                            <div> 3960 LANDMARK ST, CULVER CITY </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> payment:</div>
                            <div> 1234 </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> subtotal: </div> 
                            <div>{totalPrice} </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>shipping: </div> 
                            <div> $12 </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>total price: </div>
                            <div>${totalPrice + 12}</div>
                        </div>
                    </div>
                    <div className="checkout-button-links">
                        <a href="https://github.com/JJPhan" 
                            className="checkout-buttons checkout-gh" 
                            target="_blank">
                            <span> Checkout</span>

                        </a>
                        <a href="https://www.linkedin.com/in/jordan-phan-835919106/" 
                                className="checkout-buttons checkout-linked" 
                                target="_blank">
                            <span> Checkout</span>
                        </a>
                    </div>
                </div>

            </div>
        )
    }

}

export default CartComponent 