import React from "react";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../Actions/actions";

const Lipstick = (props) => {
  const handleClick = (id) => {
    // this.props.addToCart(id);
    console.log("handleclick2");

    props.dispatch({ type: ADD_TO_CART, payload: props.lipstick });
  };

  return (
    <div className="card">
      <div className="lippie-wrapper">
        <div>
          <img
            src={props.lipstick.api_featured_image}
            className="card-img-top"
            alt="images"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title"> {props.lipstick.name}</h5>
          <p className="card-text"> {props.lipstick.product_type}</p>
          <p className="card-text"> {props.lipstick.price}</p>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default connect()(Lipstick);
