import React from 'react';
import {clearErrors} from '../actions/session_actions'
import {close_sidebar_action} from '../actions/navbar_actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {logout} from '../actions/session_actions'

class Sidebar2 extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.renderBottomSidebar = this.renderBottomSidebar.bind(this)
    }

    submit(){ 
        this.props.closeSide(false)
    }

    renderBottomSidebar() {
        if (!this.props.currentUser) {   
            return (
                <div className="signInLinks">
                    <Link className="loginBut" to='login'> Login </Link> 
                    <Link to='/signup'> Sign Up </Link>
                </div>
            ) 
        } else {         
            return (
                <div>
                    p1z bUy sh00z D: { this.props.currentUser }
                    <Link to='/' >
                        <div>
                            <button onClick={ this.props.logout }>  Logout </button> 
                        </div>
                    </Link>
                </div>
            )
        }
    }
    
    render() {
        let openShow = this.props.is_open ? "sidebar-open" : ""

        return(
            <div>
                {this.props.is_open && <div className="overlay" onClick={this.submit } />}
                <div className={"sidebar "+openShow} >
                    <ul className="sidebar_items">
                        <li><div> Discover </div> </li> 
                        <li><div>Shop All</div></li>
                        <li><div>Brands</div></li>
                        <li><div>Collections</div></li>
                        <li><div>Styles</div></li>
                        <li><div>Wants</div></li>
                        <li><div>GREATEST</div></li>
                        <li><div>Account Preferences</div></li>
                        <li><ul>{this.renderBottomSidebar()}</ul></li>
                    </ul>
                </div >
            </div>
        )
    }
}

const mSTP = (state) => ({
    is_open: state.entities.navBar.isOpen,
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(Sidebar2)