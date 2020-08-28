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
            <div>
                <div className="listing-index" >
                    <div className="listing-header">
                            <p> Buy New </p>
                            <p> US Men Sizes</p>                  
                    </div>


                    <ul className="listing-idx">
                        { listings.map( (listing) => 
                            <ListingIndexItem key={listing.id} listing={listing} /> ) }
                    </ul>
                    
                </div>
                {/* <button className="close-list-window" onClick={() => closeListings(false) }> TEST </button> */}
             </div>
        )
    }
}


export default ListingIndex 