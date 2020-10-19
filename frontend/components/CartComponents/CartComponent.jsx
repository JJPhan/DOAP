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
        // console.log("car test")
        // console.log(this.props.cartItems)
        // console.log(this.props.cartItems.length)
        
        let noItems = (!this.props.cartItems.length === 0) ? "def-cart" : ""

        return(
            <div className="shopping-cart">
                <div className="left-cart-window">
                <div className={noItems}> YOU HAVE NO ITEMS IN YOUR CART</div>

                <div>{this.props.cartItems.length} ITEMS </div>
                        <div> SHOPPING CART </div>
                    <ul className="cart-list">
                        { this.props.cartItems.map(items => 
                            // return (
                            <div>
                        
                                <Link to={`/sneakers/${items.sneakerId}`}>  <img className="sneaker-cart-img" src={`${items.sneakerPhoto}`} /></Link> 

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
                                <button onClick={() => this.props.removeCartItem(items.id)}> delete </button>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="right-cart-window">
                    <div className="checkout-info-container">
                        <div className="checkout-header">Order Summary</div>
                        <div className="checkout-info ci1"> 
                            <div> SHIPPING ADDRESS: </div>
                            <div> 3960 LANDMARK ST, CULVER CITY </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> PAYMENT:</div>
                            
                            <div> <i class="fas fa-credit-card credit-card"></i> 1234 </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> SUBTOTAL: </div> 
                            <div>${totalPrice} </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>SHIPPING COST: </div> 
                            <div> $12 </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>TOTAL PRICE: </div>
                            <div>${totalPrice + 12}</div>
                        </div>
                    </div>
                    <div className="checkout-button-links">
                        <Link to='/sneakers' className='checkout-buttons'> Continue Shopping</Link>
                        {/* <a href="https://github.com/JJPhan" 
                            className="checkout-buttons checkout-gh" 
                            target="_blank">
                            <span> Checkout </span>

                        </a> */}
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