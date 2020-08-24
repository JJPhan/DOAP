const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const SneakerIndexItem = (props) => {
    const {sneaker} = props

    return (
        <Link to={`/sneakers/${sneaker.id}` }> 
            <div className="snkr-idx-itm" >
                <li> 
                    <img className="snkr-img" src={`${sneaker.photoUrls[0]}`} />
                    <div className="snkr-idx-prop">
                        <div className="snkr-idx-item-brand">{sneaker.brand}</div>
                        <div className="snkr-idx-item-name">{sneaker.name}</div>
                    </div>
                    
                </li>
            </div>
        </Link>
    )
}


export default SneakerIndexItem 