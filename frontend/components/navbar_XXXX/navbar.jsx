import React from 'react';
import { Link } from 'react-router-dom';
import HamModule from '../hamModule/hamModule'

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <span className="navbar">
                <div className="navbar-left">
                    <Link className="title_logo" to='/'> DOAP</Link>
                </div>

                <span className="navbar-right">
                    <ul className="navbar-list">
                        <li><Link className="discover" to='/'> Discover </Link> </li>
                        <li><Link className="shopAll" to='/'> Shop All </Link></li>
                        <li><Link className="styles" to='/'> Styles </Link></li>
                        <i className="fas fa-search"></i>
                        <li><img src=""  /> {<HamModule /> } </li >
                        
                    </ul>
                </span>
            </span>
        )
    }

}

export default Navbar