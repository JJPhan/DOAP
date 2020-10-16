import React from 'react'
import { closeListings } from '../../actions/listing_actions'
import Sneaker from '../SneakerComponents/Sneaker'
import {Link} from 'react-router-dom'

class CartWindow extends React.Component {
    constructor(props) {
        super(props)
        this.renderButtons = this.renderButtons.bind(this)
    }

    renderButtons() {
        // console.log(this.props)
        let secondButton 
        if (this.props.currentUser) {
            secondButton = <Link to='/cart' className="cart-window-button"
                                onClick={() => this.props.addCartItem({user_id: this.props.currentUser, listing_id: this.props.listingId} )}
                                > Buy</Link>
        } else {
            secondButton = <Link className="cart-window-button" to='/login'>Sign in 2 continue</Link>
        }

        return (
            <div className="cart-window-button-container">
                <button className="cart-window-button" 
                    onClick={() => this.props.closeAllWindow(false) }> CANCEL </button>
                {secondButton}
            </div>
            
        )
    }


    render() {

        return( 
            <div>
                <div className="cart-window">
                    <div className="cart-header">
                        <h1> Lowest Price </h1>
                        <h1> ${this.props.listing.price} </h1>
                    </div>
                    <div className="cart-details cart-details-top"> 
                        <div> ITEM </div>
                        <div> {this.props.sneaker.name} </div>
                    </div>
                    <div className="cart-details"> 
                        <div> SIZE </div>
                        <div> US {this.props.listing.size} </div>
                    </div>
                    <div className="cart-details"> 
                        <div> CONDITION </div>
                        <div> NEW </div>
                    </div>
                    <div className="cart-details"> 
                        <div> BOX </div>
                        <div> Good Condition </div>
                    </div>
                </div>
                {this.renderButtons()}
            </div>
        )
    }

}

export default CartWindow
