const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const AdidasIndexItem = (props) => {
    // const sneaker = props.sneaker
    // debugger
    return (

        <Link to={`/sneakers/${props.adidas.id}`} className="snkr-idx-itm">
            <li>
                <img className="snkr-img" src={`${props.adidas.photoUrls[0]}`} />
                <div className="snkr-idx-prop">
                    <div className="snkr-idx-item-brand">{props.adidas.brand}</div>
                    <div className="snkr-idx-item-name">{props.adidas.name}</div>
                </div>

            </li>
        </Link>
    )
}


export default AdidasIndexItem 