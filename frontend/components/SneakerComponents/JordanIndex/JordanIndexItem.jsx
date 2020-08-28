const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const JordanIndexItem = (props) => {
    // const sneaker = props.sneaker
    // debugger
    return (

        <Link to={`/sneakers/${props.jordan.id}`} className="snkr-idx-itm">
            <li>
                <img className="snkr-img" src={`${props.jordan.photoUrls[0]}`} />
                <div className="snkr-idx-prop">
                    <div className="snkr-idx-item-brand">{props.jordan.brand}</div>
                    <div className="snkr-idx-item-name">{props.jordan.name}</div>
                </div>

            </li>
        </Link>
    )
}


export default JordanIndexItem 