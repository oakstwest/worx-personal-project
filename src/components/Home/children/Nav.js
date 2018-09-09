import React, { Component } from "react";
import { connect } from "react-redux";
import { showNavBar } from "../../../ducks/reducer";

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="nav"
        style={this.props.showNav ? { height: "100px" } : { height: "0px" }}
      >
        nav
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { showNav: state.showNav };
}

export default connect(
  mapStateToProps,
  { showNavBar }
)(Nav);
