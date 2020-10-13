import React from 'react'
import { connect } from 'react-redux'
import ListingRow from './ListingRow'

class ListingIndex extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {
        const { listings, closeListings, openCartWindow } = this.props;

        return (
            <div className="listings-container">
                <div className="listing-index" >
                    <div className="listing-header">
                            <p> Buy New </p>
                            <p> US Men Sizes</p>                  
                    </div>


                    <ul className="listing-idx">
                        { listings.map( (listing) => 
                            <ListingRow key={listing.id} listing={listing} /> ) }                   
                    </ul>
                        
                </div>
             </div>
        )
    }
}


export default ListingIndex 