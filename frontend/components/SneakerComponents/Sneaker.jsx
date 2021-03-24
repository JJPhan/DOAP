import React from 'react'
import {requestSneaker} from '../../actions/sneaker_actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestListings, openListings, closeListings } from '../../actions/listing_actions'
import { openCartWindow, addCartItem, clearCartErrors } from '../../actions/cart_actions'
import ListingIndex from '../ListingComponents/listingIndex'
import CartWindow from '../CartComponents/CartWindowComponent'

class SneakerComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.renderListings = this.renderListings.bind(this)
        this.openWindow = this.openWindow.bind(this)
        this.openCartWindow = this.openCartWindow.bind(this)
        this.closeAllWindows = this.closeAllWindow(this)
        this.state = {
            listing: null
        }

    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.requestSneaker(this.props.match.params.sneakerId),
        this.props.requestListings(this.props.match.params.sneakerId)
        // this.props.
    }

    componentWillUnmount() {
        this.props.closeListings(false)
        this.props.openCartWindow(false)
    }

    openWindow() {
        this.props.openListings(true)
    }

    openCartWindow(listing, listingId) {
        this.props.openListings(false)
        this.props.openCartWindow(true)
        this.setState({
            listing: listing,
            listingId: listingId
        })
    }

    closeAllWindow() {
        this.props.openListings(false)
        this.props.openCartWindow(false)
    }



    renderListings() {
        let hideDefault = this.props.cartWindowOpen ? "displayNone" : "" 

        const { sneaker, listings, closeListings} = this.props
        if (this.props.listWindowOpen) {
            return (
                <div>
                    <ListingIndex className="listings-container" 
                        sneaker={sneaker}
                        listings={listings} 
                        closeAllWindow={this.closeAllWindow}
                        closeListings={closeListings} 
                        openCartWindow={this.openCartWindow}                        
                        />
                    <button className="close-list-window" onClick={() => closeListings(false)}> CLOSE LISTING </button>
                </div>
            )
        } 
        else if (this.props.cartWindowOpen) { 
            return (
                <CartWindow 
                    listing={this.state.listing}
                    listingId={this.state.listingId}
                    sneaker={sneaker}
                    currentUser={this.props.currentUser}
                    openCartWindow={() => this.closeAllWindow()}
                    closeAllWindow={()=> this.closeAllWindow()}
                    addCartItem={(cartItem) => this.props.addCartItem(cartItem)}
                /> 
            )
        } else { 
            return (
                <div className={"default-sneaker-show-right " + hideDefault }>
                    <div > {`${sneaker.name}`} </div>
                    <div> SKU: {`${sneaker.sku}`}  </div>
                    <button className="show-listing-button" onClick={this.openWindow}> BUY NEW </button>
                </div>            
            )
        }
    }

    // renderCartWindow() {

    // }


    render() {
        const {sneaker, listings } = this.props
        if (!this.props.sneaker) return null 
        // let showListings = this.props.listings
        return (
            <div>
                <div className="sneaker-show-form mobile-sneaker-show-form">
                    <div className="sneaker-show-left">
                        <div className="sneaker-img-container">
                            <img className="sneaker-show-img" src={`${sneaker.photoUrls[0]}`} />
                            <img className="sneaker-show-img" src={`${sneaker.photoUrls[1]}`} />
                        </div>

                        <div className="sneaker-slash-description"> {`${sneaker.brand} / ${sneaker.silhouette} / ${sneaker.name}`} </div>
                    </div>

                    <div className="sneaker-show-right"> {this.renderListings() }</div>

                  
                </div>


                <div className="sneaker-desc">
                    <h1> D E T A I L S </h1>
                    <i className="fas fa-chevron-down"></i>
                    <h1> {`${sneaker.name}`} </h1>
                    <p> {`${sneaker.description}`}</p>
                </div>

                <ul className="product-details">
                    <li>
                        <span>BRAND</span> <span>{sneaker.brand}</span>
                    </li>
                    <li>
                        <span>RELEASE DATE</span> <span>{sneaker.release_date}</span>
                    </li>
                    <li>
                        <span>SKU</span> <span>{sneaker.sku}</span>
                    </li>
                    <li>
                        <span>COLORWAY</span> <span>{sneaker.colorway}</span>
                    </li>
                    <li>
                        <span>SILHOUETTE</span> <span>{sneaker.silhouette}</span>
                    </li>
                    <li>
                        <span>CATEGORY</span> <span>{sneaker.category}</span>
                    </li>                       
                </ul>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    return ({
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
        listings: Object.values(state.entities.listings),
        listWindowOpen: state.ui.listingWindow.isOpen,
        cartWindowOpen: state.ui.cartWindow.cartWindowOpen,
        currentUser: state.session.id,
        // cartError: state.errors.cart
    })
}


const mDTP = (dispatch) => {
    return ({
        requestSneaker: (sneakerId) => dispatch(requestSneaker(sneakerId)),
        requestListings: (sneakerId) => dispatch(requestListings(sneakerId)),
        openListings: (is_open) => dispatch(openListings(is_open)),
        closeListings: (is_closed) => dispatch(closeListings(is_closed)),
        openCartWindow: (is_open) => dispatch(openCartWindow(is_open)),
        addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
        // clearCartErrors: 
    })

}


export default connect(mSTP, mDTP)(SneakerComponent)