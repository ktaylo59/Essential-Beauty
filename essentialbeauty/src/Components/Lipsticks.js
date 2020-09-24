import React, { Component } from "react";
import { fetchLipstick } from "../Actions/lipstickActions";
import { connect } from "react-redux";
import Lipstick from "./Lipstick";
import { Link } from "react-router-dom";

class Lipsticks extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLipstick());
  }

  renderLipstick = () => {
    if (this.props.loading) {
      return "Loading...";
    } else if (this.props.hasErrors) {
      return <p>error can't display makeup...</p>;
    } else {
      return this.props.makeup.map((makeup, name) => (
        <Link key={name} to={`/Lipsticks/$makeup.id`}>
          <Lipstick lipstick={makeup} />
        </Link>
      ));
    }
  };
  render() {
    return (
      
      <div
        className="collections card text-dark text-left bg-dark mb-6"
        style={{ maxWidth: "18rem", margin: "auto", marginTop: "5%" }}
      >
        <h3 className="d-flex justify-content-center font-weight-bold">
          Our items
        </h3>
        <div className="card-body">{this.renderLipstick()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  makeup: state.makeup.makeup,
  loading: state.makeup.loading,
  hasErrors: state.makeup.hasErrors,
});

export default connect(mapStateToProps)(Lipsticks);
