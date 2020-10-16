import React from 'react';
import ReactDOM from 'react-dom';
import * as sneakers from './util/sneaker_api_util'
import * as listings from './util/listing_api_util'
import configureStore from './store/store'
import * as cart from './util/cart_item_api_util'

import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    
    // test 
    
    // //ajax 
    // window.signup = something.signup
    // window.login = something.login
    // window.logout = something.logout
    
    window.fetchSneaker = sneakers.fetchSneaker
    window.fetchSneakers = sneakers.fetchSneakers
    window.fetchListings = listings.fetchListings
    window.fetchListing = listings.fetchListing
    window.fetchCartItems = cart.fetchCartItems
    window.addCartItem = cart.addCartItem
    window.removeCartItem = cart.removeCartItem
    // store 
    // window.signup = signup;
    // window.store = store;
    
    // window.dispatch = store.dispatch;
    // window.signup = something.signup;
    // window.login = something.login;
    // window.logout = something.logout;
    
    //bootstrapping current user
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
