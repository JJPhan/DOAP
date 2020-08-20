import React from 'react'
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sidebar" >
            <ul>
                <li><div> Discover </div> </li>
                <li><div>Shop All</div></li>
                <li><div>Brands</div></li>
                <li><div>Collections</div></li>
                <li><div>Styles</div></li>
                <li><div>Wants</div></li>
                <li><div>GREATEST</div></li>
                <li><div>Account Preferences</div></li>
                <li><Link to='login'> Login </Link> </li>
                <li><Link to='/signup'> Sign Up </Link> </li>
            </ul>
        </div >
    )
}

export default SideBar