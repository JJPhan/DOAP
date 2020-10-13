import React from 'react'


class ListingRow extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <li className="listing-row" onClick={() => openCartWindow()}>
                <div className="listing-size">{ this.props.listing.size } </div>
                <div className="listing-price"> $ {this.props.listing.price}.00 </div> 
            </li>  
        )
    }
}

export default ListingRow