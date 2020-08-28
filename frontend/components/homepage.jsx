import React from 'react';
import { Link } from 'react-router-dom';



class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/sneakers/1' >
                    <div className="splash-image">
                            <img src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" height='800px' width='100%' />
                            <h2 className="splash-text"> AIR JORDAN 1 - CHICAGO </h2>
                    </div>
                </Link>

            </div>
        )
    }
};


export default Homepage;