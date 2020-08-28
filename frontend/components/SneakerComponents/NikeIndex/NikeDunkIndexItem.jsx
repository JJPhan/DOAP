const { Link } = require("react-router-dom")

import React from 'react';
// import { Link, withRouter } from 'react-router-dom';


const NikeDunkIndexItem = (props) => {
    // const sneaker = props.sneaker
    // debugger
    return (

        <Link to={`/sneakers/${props.dunk.id}`} className="snkr-idx-itm">
            <li>
                <img className="snkr-img" src={`${props.dunk.photoUrls[0]}`} />
                <div className="snkr-idx-prop">
                    <div className="snkr-idx-item-brand">{props.dunk.brand}</div>
                    <div className="snkr-idx-item-name">{props.dunk.name}</div>
                </div>

            </li>
        </Link>
    )
}


export default NikeDunkIndexItem 