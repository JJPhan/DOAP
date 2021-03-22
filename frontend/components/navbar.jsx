import React, {useEffect} from 'react';
import {open_sidebar_action} from '../actions/navbar_actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = ({currentUser, openSide}) => {

    const openSearch = () => {
        openSide(true, true)
    }

    let hideCartIcon = currentUser ? "" : "cart-hidden"

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                document.querySelector(".nav-container").className = "nav-container scroll";
              } else {
                document.querySelector(".nav-container").className = "nav-container";
              }
        })
    }, [])

    return (
        <div className="nav-container">
            <div className="navbar">
                <Link className="title-logo" to='/'> DOAP</Link>
               <ul className="navbar-list">
                    <li><Link to='/'> Discover </Link> </li>
                    <li><Link to='/sneakers'> Shop All </Link></li>
                        <Link to='/cart'>
                    <li className={"fas fa-shopping-cart cartIcon " +hideCartIcon}></li></Link>
                    <li onClick={openSearch} >
                        <i className="fas fa-search nav-magnify" />
                    </li>
                    <li className="hamBar">
                        <i className="fas fa-bars" onClick={openSide} ></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        currentUser: state.session.id
    }
}

const mDTP = dispatch => {
    return {
    openSide: (is_open, isSearch) => dispatch(open_sidebar_action(is_open, isSearch)),
    // closeSide: (is_closed) => dispatch(closed_sidebar_action(is_closed))
    }
}

export default connect(mSTP, mDTP)(Navbar)