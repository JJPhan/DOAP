import React from 'react';
import ReactDOM from 'react-dom';
// import * as something from './util/session_api_util'
import configureStore from './store/store'
// import * as something from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore()

    // test 
    
    // //ajax 
        // window.signup = something.signup
        // window.login = something.login
        // window.logout = something.logout


    // store 
        // window.signup = signup;
        // window.getState = store.getState;
        // window.dispatch = store.dispatch;
        // window.signup = something.signup;
        // window.login = something.login;
        // window.logout = something.logout;
    


    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root )
})
