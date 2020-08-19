import React from 'react';


const App = () => {
    return (
        <div>
            <h1>AIRJORDAN</h1>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>

    )
}

export default App