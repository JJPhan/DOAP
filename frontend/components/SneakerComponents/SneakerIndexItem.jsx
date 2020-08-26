const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const SneakerIndexItem = (props) => {
    // const sneaker = props.sneaker
    // debugger
    return (
    
        <Link to={`/sneakers/${props.sneaker.id}`} className="snkr-idx-itm"> 
                <li> 
                    <img className="snkr-img" src={`${props.sneaker.photoUrls[0]}`} />
                    <div className="snkr-idx-prop">
                        <div className="snkr-idx-item-brand">{props.sneaker.brand}</div>
                        <div className="snkr-idx-item-name">{props.sneaker.name}</div>
                    </div>
                    
                </li>
        </Link>
    )
}


export default SneakerIndexItem 