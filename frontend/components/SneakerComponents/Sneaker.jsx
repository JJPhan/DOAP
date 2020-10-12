import React from 'react'
import {requestSneaker} from '../../actions/sneaker_actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestListings, openListings, closeListings } from '../../actions/listing_actions'
import ListingIndex from '../ListingComponents/listingIndex'

// import {IS_OPEN, IS_CLOSED} from 


class SneakerComponent extends React.Component {
    constructor(props) {
        super(props) 
        this.renderListings = this.renderListings.bind(this)
        this.openWindow = this.openWindow.bind(this)
        // this.closeWindow = this.closeWindow.bind(this)
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.requestSneaker(this.props.match.params.sneakerId),
        this.props.requestListings(this.props.match.params.sneakerId)
    }

    componentWillUnmount() {
        this.props.closeListings(false)
    }

    openWindow() {
        this.props.openListings(true)
    }

    renderListings() {
        const { sneaker, listings, closeListings } = this.props
        if (this.props.listWindowOpen) {
            return (
                <div>
                    <ListingIndex className="listings-container" listings={listings} closeListings={closeListings} />
                    <button className="close-list-window" onClick={() => closeListings(false)}> CLOSE LISTING </button>

                </div>
        )} else { 
            return (
                <div className="default-sneaker-show-right">
                    <div > {`${sneaker.name}`} </div>
                    <div> SKU: {`${sneaker.sku}`}  </div>
                    <button className="show-listing-button" onClick={this.openWindow}> BUY NEW </button>
                </div>            
            )
        }
    }


    render() {
        const {sneaker, listings } = this.props
        if (!this.props.sneaker) return null 
        // let showListings = this.props.listings
        
        return (
            <div>
                <div className="sneaker-show-form">
                    <div className="sneaker-show-left">
                        <div className="sneaker-img-container">
                            <img className="sneaker-show-img" src={`${sneaker.photoUrls[0]}`} />
                            <img className="sneaker-show-img" src={`${sneaker.photoUrls[1]}`} />
                        </div>

                        <div> {`${sneaker.brand} / ${sneaker.silhouette} / ${sneaker.name}`} </div>
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
    // debugger
    return ({
        sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
        listings: Object.values(state.entities.listings),
        listWindowOpen: state.ui.isOpen
    })
}


const mDTP = (dispatch) => {
    // debugger 
    return ({
        requestSneaker: (sneakerId) => dispatch(requestSneaker(sneakerId)),
        requestListings: (sneakerId) => dispatch(requestListings(sneakerId)),
        openListings: (is_open) => dispatch(openListings(is_open)),
        closeListings: (is_closed) => dispatch(closeListings(is_closed))
    })

}


export default connect(mSTP, mDTP)(SneakerComponent)