import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JordanFeature from "./FeaturedSneakers/FeaturedJContainer";
import AdidasFeature from "./FeaturedSneakers/FeaturedAdidasContainer";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Link to="/sneakers/1">
        <img
          className="splash-image"
          src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-1.jpg"
        />
      </Link>
      <JordanFeature />
      <Link to="/adidas">
        <img
          className="splash-image"
          src="https://jphan-doap-dev.s3-us-west-1.amazonaws.com/splash-2.jpg"
        />
      </Link>
      <AdidasFeature />
    </div>
  );
};

export default Homepage;
