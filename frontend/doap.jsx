import React from 'react';
import ReactDOM from 'react-dom';
// import * as something from './util/session_api_util'
import configureStore from './store/store'
// import * as something from './actions/session_actions'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    
    // test 
    
    // //ajax 
    // window.signup = something.signup
    // window.login = something.login
    // window.logout = something.logout
    
    
    // store 
    // window.signup = signup;
    // window.store = store;
    
    // window.dispatch = store.dispatch;
    // window.signup = something.signup;
    // window.login = something.login;
    // window.logout = something.logout;
    
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }    
    
    window.getState = store.getState;
    
    // const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root )
})
