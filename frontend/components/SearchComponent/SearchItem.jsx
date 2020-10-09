import React from 'react';
const { Link } = require("react-router-dom")

const SearchItems = ({sneaker}) => {
    return (
        <Link to={`/sneakers/${sneaker.id}`} 
            className="sidebar-search-results" 
            >
            <img className="sidebar-img" src={`${sneaker.photoUrls[0]}`} />
            <div className="search-item-name">{sneaker.name}</div>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </Link>
    )
}

export default SearchItems

