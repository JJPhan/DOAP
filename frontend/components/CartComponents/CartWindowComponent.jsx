import React from 'react'
import { closeListings } from '../../actions/listing_actions'
import Sneaker from '../SneakerComponents/Sneaker'
import {Link} from 'react-router-dom'

class CartWindow extends React.Component {
    constructor(props) {
        super(props)
        this.renderButtons = this.renderButtons.bind(this)
        this.state = {
            sneakerId: "0"
        }
        // this.addCartItem = this.addCartItem.bind(this)
    }

    componentDidMount() {
        this.setState({sneakerId: this.props.sneaker.id}) 
    }

    addCartItem() {
        this.props.addCartItem({user_id: this.props.currentUser, listing_id: this.props.listingId} )
    }


    renderButtons() {
        let secondButton 
        if (this.props.currentUser) {
            secondButton = <Link to='/cart?refresh=true' className="cart-window-button"
                                // onClick={() => this.props.addCartItem({user_id: this.props.currentUser, listing_id: this.props.listingId} )}
                                onClick={() => this.addCartItem()}
                                > PURCHASE </Link>
        } else {
            secondButton = <Link className="cart-window-button" to={`/login?id=${this.state.sneakerId}`}>Login to Continue</Link>
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
            <div className="cart-window">
                <div>
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
