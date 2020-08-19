import React from 'react';
import { Provider } from 'react-redux'
import HashRouter from 'react-router-dom'


const Root = ( {store} ) => {
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
}

export default Root 


// Thus App will be rendered for all routes in your app. We'll define our routes within App.





