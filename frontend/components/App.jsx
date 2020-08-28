import React from 'react';
import {Route} from 'react-router'
import LoginFormContainer from './session_form/LoginFormContainer'
import SignupFormContainer from './session_form/SignupFormContainer'
import Navbar from './navbar'
import Sidebar2 from './sidebar2'
import SneakerIndexContainer from './SneakerComponents/SneakerIndex'
import SneakerComponent from '../components/SneakerComponents/Sneaker'
import Homepage from '../components/homepage'
import JordanIndex from '../components/SneakerComponents/JordanIndex/JordanIndex'
import NikeDunkIndex from '../components/SneakerComponents/NikeIndex/NikeDunkIndex'
import AdidasIndex from '../components/SneakerComponents/AdidasIndex/AdidasIndex'
// import AuthRoute from '../util/route_util'

const App = () => {
    return (
            <div className="main-content">
                    <Route exact path="/sneakers" component={SneakerIndexContainer} />
                <div>
                    <Navbar />
                    
                    <Sidebar2 />
                </div>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/sneakers/:sneakerId" component={SneakerComponent} />
                    <Route exact path="/airjordans" component={JordanIndex} />
                    <Route exact path="/nikedunks" component={NikeDunkIndex} />
                    <Route exact path="/adidas" component={AdidasIndex} />

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