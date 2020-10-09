import React from 'react';
import {Route} from 'react-router'
import LoginFormContainer from './session_form/LoginFormContainer'
import SignupFormContainer from './session_form/SignupFormContainer'
import Navbar from './navbar'
import SidebarContainer from './SidebarComponents/SidebarContainer'
import SneakerIndexContainer from './SneakerComponents/SneakerIndex'
import SneakerComponent from '../components/SneakerComponents/Sneaker'
import Homepage from '../components/homepage'
import JordanIndex from '../components/SneakerComponents/JordanIndex/JordanIndex'
import NikeDunkIndex from '../components/SneakerComponents/NikeIndex/NikeDunkIndex'
import AdidasIndex from '../components/SneakerComponents/AdidasIndex/AdidasIndex'
import SearchIndexContainer from '../components/SearchComponent/SearchIndexContainer'
// import AuthRoute from '../util/route_util'

const App = () => {
    return (
            <div className="main-content">
                    <Navbar />
                    <SidebarContainer />
                    <Route exact path="/sneakers" component={SneakerIndexContainer} />
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/sneakers/:sneakerId" component={SneakerComponent} />
                    <Route exact path="/airjordans" component={JordanIndex} />
                    <Route exact path="/nikedunks" component={NikeDunkIndex} />
                    <Route exact path="/adidas" component={AdidasIndex} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route exact path="/signup" component={SignupFormContainer} />
                    <Route exact path="/search/:searchinput" component={SearchIndexContainer} />
                   <div className="footer"></div>
            </div>
    )
}

export default App