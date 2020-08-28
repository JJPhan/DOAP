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
            <div className="listing-index" >
                <div className="listing-header">
                    <div>
                        <p> Buy New </p>
                        <p> US Men Sizes</p>
                    </div>  
                    

                </div>


                <ul className="listing-idx">
                    { listings.map( (listing) => 
                        <ListingIndexItem key={listing.id} listing={listing} /> ) }
                </ul>
                
                <button className="close-list-window" onClick={() => closeListings(false) }> TEST </button>
            </div>
        )
    }
}


export default ListingIndex 