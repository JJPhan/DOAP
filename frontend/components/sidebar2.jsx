import React from 'react';
import {close_sidebar_action} from '../actions/navbar_actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Sidebar2 extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(){ 
        this.props.closeSide(false)
    }
    
    render() {
        let openShow = this.props.is_open ? "sidebar-open" : ""

        return(
            <div>
                {this.props.is_open && <div className="overlay" onClick={this.submit } />}
                <div className={"sidebar "+openShow} >
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
            </div>
        )
    }
}

const mSTP = (state) => ({
    is_open: state.entities.navBar.isOpen
})

const mDTP = (dispatch) => ({
    closeSide: (is_closed) => dispatch(close_sidebar_action(is_closed))
})

export default connect(mSTP, mDTP)(Sidebar2)