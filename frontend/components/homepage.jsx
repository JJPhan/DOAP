import React from 'react';
import { Link } from 'react-router-dom';
import JordanFeature from './FeaturedSneakers/FeaturedJContainer'
import AdidasFeature from './FeaturedSneakers/FeaturedAdidasContainer'

class Homepage extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div>
                <Link to='/sneakers/1' >
                    <img className="splash-image" src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-1.jpg" height='800px' width='100%' />
                </Link>
                <JordanFeature />
                <Link to='/adidas'>
                    <img className="splash-image2" src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-2.jpg" />
                </Link>
                <AdidasFeature />
            </div>
        )
    }
};


export default Homepage;