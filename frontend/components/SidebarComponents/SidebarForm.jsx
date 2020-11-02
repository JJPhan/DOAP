import React from 'react';
import SidebarContainer from '../SearchComponent/SearchContainer'
import { Link } from 'react-router-dom';

class SidebarForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: false
        }

        this.submit = this.submit.bind(this)
        this.renderBottomSidebar = this.renderBottomSidebar.bind(this)
        this.sidebarType = this.sidebarType.bind(this)
        this.sidebarLogout = this.sidebarLogout.bind(this)
    }

    submit(){ 
        this.props.closeSide(false)
    }

    sidebarLogout() {
        this.props.logout()
        this.props.closeSide()
    }

    renderBottomSidebar() {
        if (!this.props.currentUser) {   
            return (
                <div className="signInLinks">
                    <Link className="loginBut" to='/login'> Login </Link> 
                    <Link className="loginBut sidebar-signup" to='/signup'> Sign Up </Link>
                </div>
            ) 
        } else {         
            return (
                <div>
                { this.props.currentEmail }
                    <Link to='/' >
                        <div>
                            <button onClick={ this.sidebarLogout }>  Logout </button> 
                        </div>
                    </Link>
                </div>
            )
        }
    }
    
    sidebarType() {
        let openShow = this.props.is_open ? "sidebar-open" : ""

        if (!this.props.isSearch) {
            return (
                
            <div>
                {this.props.is_open && <div className="overlay" onClick={this.submit } />}
                <div className={"sidebar "+openShow} >
                    <ul className="sidebar_items">
                        <li><div><Link to='/' onClick={this.submit}> Discover </Link></div> </li> 
                        <li><div><Link to='/sneakers' onClick={this.submit} > Shop All </Link></div></li>
                        {/* <li><div>Brands</div></li> */}
                        <li><div><Link to='/airjordans' onClick={this.submit} > JORDAN BRAND </Link></div></li>
                        <li><div><Link to='/nikedunks' onClick={this.submit} > NIKE DUNKS </Link></div></li>
                        <li><div><Link to='/adidas' onClick={this.submit} > ADIDAS </Link></div></li>

                        <li>
                            <a href="https://github.com/JJPhan" target="_blank">
                                <i className="fab fa-github" ></i> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jordanjphan/" target="_blank">
                                <i className="fab fa-linkedin"></i> LinkedIn                      
                            </a>
                        </li>
                        <li><ul className="signin-buttons-container">{this.renderBottomSidebar()}</ul></li>
                    </ul>
                </div >
            </div>
            )
        } else {
            return (
               <SidebarContainer />
            )
        }
    }


    render() {
        return(
            <div>
                {this.sidebarType()}
            </div>
        )
    }
}


export default SidebarForm