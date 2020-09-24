import React, { Component } from "react";
import { fetchLipliner } from "../Actions/liplinerActions";
import { connect } from "react-redux";
import Lipliner from "./Lipliner";
import { Link } from "react-router-dom";

class Lipliners extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLipliner());
  }

  renderLipliner = () => {
    if (this.props.loading) {
      return "";
    } else if (this.props.hasErrors) {
      return <p>error can't display makeup...</p>;
    } else {
      return this.props.makeup.map((makeup, name) => (
        <Link key={name} to={`/lipliners/$makeup.id`}>
          <Lipliner lipliner={makeup} />
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
        <div className="card-body">{this.renderLipliner()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  makeup: state.makeup.makeup,
  loading: state.makeup.loading,
  hasErrors: state.makeup.hasErrors,
});

export default connect(mapStateToProps)(Lipliners);
