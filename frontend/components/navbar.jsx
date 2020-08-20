import React from 'react'
import {open_sidebar_action} from '../actions/navbar_actions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit() {
        // console.log(this .props)
        this.props.openSide(true)
    }

    render(){
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
                        <li>  
                            <div className="hamBar">
                                <i class="fas fa-bars" onClick={this.submit} ></i>
                            </div>  
                        </li>
                    </ul>
                </span>
            </span>
        )
    }
}

const mDTP = dispatch => ({
    openSide: (is_open) => dispatch(open_sidebar_action(is_open)),
    // closeSide: (is_closed) => dispatch(closed_sidebar_action(is_closed))
})

export default connect(null, mDTP)(Navbar)