import React from "react";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../Actions/actions";

const Eyeliner = (props) => {
  const handleClick = (id) => {
    console.log("handleclick");

    props.dispatch({ type: ADD_TO_CART, payload: props.eyeliner });
  };

  return (
    <div className="card">
      <div className="lippie-wrapper">
        <div>
          <img
            src={props.eyeliner.api_featured_image}
            className="card-img-top"
            alt="images"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title"> {props.eyeliner.name}</h5>
          <p className="card-text"> {props.eyeliner.product_type}</p>
          <p className="card-text"> {props.eyeliner.price}</p>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default connect()(Eyeliner);
