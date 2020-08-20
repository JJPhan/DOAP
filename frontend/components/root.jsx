import React from 'react';
import { Provider } from 'react-redux'
import {HashRouter} from 'react-router-dom'
import App from './App'

const Root = ( {store} ) => {
    return( 
         <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>

)}

export default Root 


// Thus App will be rendered for all routes in your app. We'll define our routes within App.
// store provides state and dispatch methods to components




