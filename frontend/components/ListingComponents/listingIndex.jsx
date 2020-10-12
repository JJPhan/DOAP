import React from 'react'
import { connect } from 'react-redux'

import ListingIndexItem from './listingIndexItem'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { listings, closeListings } = this.props;

        return (
            <div className="listings-container">
                <div className="listing-index" >
                    <div className="listing-header">
                            <p> Buy New </p>
                            <p> US Men Sizes</p>                  
                    </div>


                    <ul className="listing-idx">
                        { listings.map( (listing) => 
                            // <ListingIndexItem key={listing.id} listing={listing} /> ) }
                          <li className="listing-row">
                            <div className="listing-size">{ listing.size } </div>
                            <div className="listing-price"> $ {listing.price}.00 </div> 
                        </li>  )}
    
                   
                    </ul>
                        
                </div>
             </div>
        )
    }
}


export default ListingIndex 