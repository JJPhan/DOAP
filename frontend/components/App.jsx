import React from 'react';
import {Route} from 'react-router'
import LoginFormContainer from './session_form/LoginFormContainer'
import SignupFormContainer from './session_form/SignupFormContainer'
import Navbar from './navbar'
import Sidebar2 from './sidebar2'
import SneakerIndexContainer from './SneakerComponents/SneakerIndex'
import SneakerComponent from '../components/SneakerComponents/Sneaker'
// import AuthRoute from '../util/route_util'

const App = () => {
    return (
            <div className="main-content">
                <div>
                    <Navbar />
                    <Route exact path="/sneakers" component={SneakerIndexContainer} />
                    
                    <Sidebar2 />
                </div>
                    <Route exact path="/sneakers/:sneakerId" component={SneakerComponent} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route exact path="/signup" component={SignupFormContainer} />
                    {/* <Route exact path="/categroy/:category" component={`${sneaker.category}Component`} /> */}
                <footer>
                    <div className="footer"></div>
                </footer>
            </div>
    )
}

export default App