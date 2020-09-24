import React, { Component } from "react";
import { fetchEyeliner } from "../Actions/eyelinerActions";
import { connect } from "react-redux";
import Eyeliner from "./Eyeliner";
import { Link } from "react-router-dom";

class Eyeliners extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEyeliner());
  }

  renderEyeliner = () => {
    if (this.props.loading) {
      return "";
    } else if (this.props.hasErrors) {
      return <p>error can't display makeup...</p>;
    } else {
      return this.props.makeup.map((makeup, name) => (
        <Link key={name} to={`/eyeliners/$makeup.id`}>
          <Eyeliner eyeliner={makeup} />
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
        <div className="card-body">{this.renderEyeliner()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  makeup: state.makeup.makeup,
  loading: state.makeup.loading,
  hasErrors: state.makeup.hasErrors,
});

export default connect(mapStateToProps)(Eyeliners);
