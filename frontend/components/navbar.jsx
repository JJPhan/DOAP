import React from 'react'
import {open_sidebar_action} from '../actions/navbar_actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.openSide = this.openSide.bind(this)
        this.openSearch = this.openSearch.bind(this)
    }

    openSide() {
        // console.log(this .props)
        // pass in two parameters
        this.props.openSide(true, false)
    }

    openSearch() {
        this.props.openSide(true, true)
    }

    render(){
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <Link className="title_logo" to='/'> DOAP</Link>
                </div>

                <div className="navbar-right">
                    <ul className="navbar-list">
                        <li><Link className="discover" to='/'> Discover </Link> </li>
                        <li><Link className="shopAll" to='/sneakers'> Shop All </Link></li>
                        <li><Link className="styles" to='/'> Styles </Link></li>
                        <li onClick={this.openSearch} >
                            <i className="fas fa-search nav-magnify" />
                        </li>
                        <li>  
                            <div className="hamBar">
                                <i className="fas fa-bars" onClick={this.openSide} ></i>
                            </div>  
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    openSide: (is_open, isSearch) => dispatch(open_sidebar_action(is_open, isSearch)),
    // closeSide: (is_closed) => dispatch(closed_sidebar_action(is_closed))
})

export default connect(null, mDTP)(Navbar)