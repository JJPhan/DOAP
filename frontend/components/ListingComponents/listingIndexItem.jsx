// const { Link } = require("react-router-dom")
import React from 'react';


const ListingIndexItem = (props) => {

    return (
        
        <li className="listing-row">
            <div>{ props.listing.size } </div>
            <div> $ {props.listing.price}.00 </div>
        </li>
    )
}

export default ListingIndexItem