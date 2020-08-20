import { connect } from "react-redux";
import Navbar from "./navbar";
import {login, logout, signup } from "../../actions/session_actions"

const mSTP = ({entities, session}) => ({
    currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar)