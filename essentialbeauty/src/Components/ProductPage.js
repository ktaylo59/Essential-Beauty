import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Actions/cartActions";
// import Lipsticks from "./Lipsticks";

class ProductPage extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
    console.log("handleclick");
  };

  render() {
    let makeupList = this.props.makeup.map((makeup) => {
      return (
        <div
          className="card"
          style={{ maxWidth: "30rem", margin: "auto", marginTop: "5%" }}
          key={makeup.id}
        >
          {/* <div className="card-key" key={makeup.id} > */}
          {/* <div className="card-wrapper">
                            <img src={makeup.api_featured_image} className="card-img-top" style={{ height: "40vh" }} alt="images"/>
                        </div> */}
          <div className="card-body">
            <img
              src={makeup.api_featured_image}
              className="card-img-top"
              style={{ height: "40vh" }}
              alt="images"
            />
            <h5 className="card-title">{makeup.name}</h5>
            <p className="card-text">{makeup.product_type}</p>
            <p className="card-text">{makeup.price}$</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleClick(makeup.id);
            }}
          >
            Add to Cart
          </button>
        </div>
        //  </div>
      );
    });

    return (
      <div className="card-image" style={{ margin: "2%" }}>
        <h3 className="d-flex justify-content-center font-weight-bold">
          Our items
        </h3>
        <div className="box specialwrap">
          {makeupList}
          {/* <Lipsticks/> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    makeup: state.makeup.makeup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
