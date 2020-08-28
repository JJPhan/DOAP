import React from 'react';
import { Link } from 'react-router-dom';



class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="splash-image">
                    <Link to='/sneakers/1' >
                        <img src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" height='800px' width='100%' />
                    </Link>
                </div>

            </div>
        )
    }
};


export default Homepage;