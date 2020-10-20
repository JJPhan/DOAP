import React from 'react'


class ListingRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="listing-row listingWindow" onClick={() => this.props.openCartWindow(this.props.listing, this.props.listing.id)}>
                <div className="listing-size listingWindow">{ this.props.listing.size } </div>
                <div className="listing-price cartWindow"> $ {this.props.listing.price}.00 </div> 
            </li>  
        )
    }
}

export default ListingRow