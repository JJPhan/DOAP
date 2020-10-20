import React from 'react'
import { connect } from 'react-redux'
import CartWindow from '../CartComponents/CartWindowComponent'
import ListingRow from './ListingRow'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }



    renderCart() {
        <CartWindow listing={this.props.listing} /> 
    }

    render() {
        const { listings, closeListings, openCartWindow } = this.props;
        let hideDefault = this.props.cartWindowOpen ? "displayNone" : "" 

        return (
            
            <div className={"listings-container " + hideDefault}>
                <div className="listing-index" >
                    <div className="listing-header">
                            <p> Buy New </p>
                            <p> US Men Sizes</p>                  
                    </div>


                    <ul className="listing-idx">
                        { listings.map( (listing) => 
                            <ListingRow key={listing.id} 
                                listing={listing} 
                                listingId={listing.id}
                                openCartWindow={this.props.openCartWindow}
                                closeAllWindow={this.props.closeAllWindow}
                                 />
                            ) 
                        }                   
                    </ul>
                        
                </div>
             </div>
        )
    }
}


export default ListingIndex 