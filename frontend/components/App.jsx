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
import CartContainer from '../components/CartComponents/CartContainer'

const App = () => {
    return (
        <div className="app-container">   
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
                        <Route exact path="/cart" component={CartContainer} />
                <div className="footer">
                        <a href="https://github.com/JJPhan" target="_blank">
                                <i className="fab fa-github foot-buttons" ></i> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/jordan-phan-835919106/" target="_blank">
                                <i className="fab fa-linkedin foot-buttons"></i> LinkedIn                      
                        </a>
                </div>
        </div>
    )
}

export default App