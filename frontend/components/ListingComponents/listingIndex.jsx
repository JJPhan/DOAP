import React from 'react'
import { connect } from 'react-redux'

import ListingIndexItem from './listingIndexItem'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { listings } = this.props;

        return (
            <div className="listing-index" >
                <div className="listing-header">
                    {/* <h1> SIZE PREFERENCES</h1> */}
                    <p> Buy New </p>
                    <p> US Men Sizes</p>
                </div>


                <ul className="listing-idx">
                    { listings.map( (listing) => 
                        <ListingIndexItem key={ listing.id } listing={listing} /> ) }
                </ul>
                
            </div>
        )
    }
}


export default ListingIndex 