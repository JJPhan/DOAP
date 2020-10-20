import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedRecContainer from '../FeaturedSneakers/FeaturedRecContainer'

class CartComponent extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.requestCart()
    }

    render() {

        let subTotal = 0
        this.props.cartItems.map(items => subTotal += items.sneakerPrice)
        let shippingCost = 0
        let totalPrice
        if (subTotal === 0) {
            totalPrice = 0 
            shippingCost = 0
        } else {
            shippingCost = 12
            totalPrice = subTotal + shippingCost
        }

        let noItems = (subTotal === 0) ? "" : "def-cart"



        return(
            <div>
            <div className="sneaker-show-form cart-font">
                <div className="left-cart-window">

                <div className="left-cart-header">{this.props.cartItems.length} ITEMS </div>
                        <div className="left-cart-header2"> SHOPPING CART </div>
                        <Link to='/sneakers'>
                            <div className={noItems + " noItemsDefault"}> 
                                YOU HAVE NO ITEMS IN YOUR CART
                                <br />
                                <br />
                                <br />
                                <br />

                                CLICK TO CONTINUE SHOPPING
                            </div>
                        </Link>
                    <ul className="cart-list">
                        { this.props.cartItems.map(items => 
                            // return (
                            <div className="left-cart-container">
                                
                                <Link to={`/sneakers/${items.sneakerId}`} className="cart-image-container">   <img className="sneaker-cart-img" src={`${items.sneakerPhoto}`} /></Link> 
                                <div className="left-cart-right-details">
                                    <div>{items.sneakerName} </div>
                                    <br />
                                    <div>SZ {items.sneakerSize} </div>
                                    <div>${items.sneakerPrice}</div>
                                    <div>SKU {items.sneakerSku}</div>
                                    <br />
                                    <div><button onClick={() => this.props.removeCartItem(items.id)}> REMOVE </button></div>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="right-cart-window">
                    <div className="checkout-info-container">
                        <div className="checkout-header">Order Summary</div>
                        <div className="checkout-info ci1"> 
                            <div> SHIPPING ADDRESS: </div>
                            <div className="ship-add" > 3960 LANDMARK ST, CULVER CITY </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> PAYMENT:</div>
                            
                            <div> <i class="fas fa-credit-card credit-card"></i> 1234 </div>
                        </div>
                        <div className="checkout-info"> 
                            <div> SUBTOTAL: </div> 
                            <div>${subTotal} </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>SHIPPING COST: </div> 
                            <div> ${shippingCost} </div>
                        </div>
                        <div className="checkout-info"> 
                            <div>TOTAL PRICE: </div>
                            <div>${totalPrice}</div>
                        </div>
                        <div className="disclaimer"> DOAP is an exercise in developing a Full Stack web application using React, Redux, and Ruby on Rails, so while you can’t checkout the Cart you’ve assembled, you can “check out” the code behind the site.
</div>
                    </div>
                    <div className="checkout-button-links">
                        <Link to='/sneakers' className='checkout-buttons'> Continue Shopping</Link>
                        <a href="https://github.com/JJPhan/DOAP" 
                                className="checkout-buttons checkout-linked" 
                                target="_blank">
                            <span> Checkout</span>
                        </a>
                    </div>
                </div>
            </div>
            <FeaturedRecContainer />
            </div>
        )
    }

}

export default CartComponent 