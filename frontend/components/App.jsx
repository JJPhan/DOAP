import React from 'react';
import {Route} from 'react-router'
import LoginFormContainer from './session_form/LoginFormContainer'
import SignupFormContainer from './session_form/SignupFormContainer'
import Navbar from './navbar'
import Sidebar2 from './sidebar2'
import SneakerIndex from './SneakerComponents/SneakerIndex'
// import AuthRoute from '../util/route_util'
// import HamModule from './hamModule/hamModule'

const App = () => {
    return (
            <div>
                <Sidebar2 />
                <div className="parent-nav">
                    <Navbar />
                </div>
                    <Route path="/sneakers" component={SneakerIndex} /> 
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </div>
    )
}

export default App