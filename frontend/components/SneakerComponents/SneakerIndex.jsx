import React, { useEffect } from "react";
import { requestSneakers, requestSneaker } from "../../actions/sneaker_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SneakerIndexItem from "./SneakerIndexItem";

const SneakerIndex = ({ sneakers, requestSneakers }) => {
    
  useEffect(() => {
    window.scrollTo(0,0)
    requestSneakers();
  }, []);

  return (
    <div>
      <div className="index-header"> Shop All </div>
      <ul className="snkr-idx">
        {sneakers.map((sneaker) => (
          <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />
        ))}
      </ul>
    </div>
  );
};

const mSTP = (state) => ({
  sneakers: Object.values(state.entities.sneakers),
});

const mDTP = (dispatch) => ({
  requestSneakers: () => dispatch(requestSneakers()),
});

export default connect(mSTP, mDTP)(SneakerIndex);
