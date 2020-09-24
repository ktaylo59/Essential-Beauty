import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../Actions/cartActions";
import { addQuantity } from "../Actions/cartActions";
// import { addToCart } from '../Actions/cartActions';
import { subtractQuantity } from "../Actions/cartActions";


class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    // this.props.dispatch({ type: removeFromCart, payload: id });
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    console.log(this.props.addedItems);
    let addedItems = this.props.addedItems.length ? (
      this.props.addedItems.map((item) => {
        return (
          <div className="cart-main">
            <div className="items-wrapper">
              <ul className="cart-items">
                {this.props.addedItems
                  ? this.props.addedItems.map((item, index) => (
                      <li key={index}>
                        <div>
                          <img src={item.api_featured_image} alt={item.name} />
                        </div>
                        <div>
                          <strong>{item.name}</strong>
                        </div>
                        <div>
                          <strong>{item.product_type}</strong>
                        </div>
                        <div>{item.price}</div>
                        <div>
                          <p>
                            <b>Quantity: {item.quantity}</b>
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            this.props.dispatch(this.handleRemove(item))
                          }
                        >
                          Remove
                        </button>
                      </li>
                    ))
                  : ""}
              </ul>
              {this.props.addedItems.length !== 0 && (
                <div>
                  <div>
                    <div>
                      <button type="button" onclick="(AddQuantity)">
                        <strong>Total: </strong>
                        {this.props.addedItems.reduce(
                          (total, c) => total + (c.price * c.count, 0)
                        )}
                      </button>
                    </div>
                    <button className="proceed">Proceed</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })
    ) : (
      <p>Nothing</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addedItems: state.cart.cartSelection,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cartSelection: (id) => {
      dispatch(removeFromCart(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
