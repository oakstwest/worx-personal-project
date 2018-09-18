import React, { Component } from "react";
import { connect } from "react-redux";
import { showNavBar } from "../../../ducks/reducer";
import { posix } from "path";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="nav"
        style={
          this.props.showNav
            ? {
                height: "85vh",
                position: "absolute",
                top: "90px",
                background: "white",
                width: "100vw",
                overflow: "hidden"
              }
            : { height: "0px" }
        }
        onClick={() => this.props.showNavBar(this.props.showNav)}
      >
        <ul className="navbar-nav">
          <div className="navbar-links">
            <Link to="/blowers" className="nav-bar-link">
              Blowers & Mulchers
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="/trimmers" className="nav-bar-link">
              Trimmers & Edgers
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="/chainsaws" className="nav-bar-link">
              Chainsaws
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="/powertools" className="nav-bar-link">
              Power Tools
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="/portable" className="nav-bar-link">
              Portable Power Cleaners
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="yardcarts" className="nav-bar-link">
              Yard Carts
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="lawnmowers" className="nav-bar-link">
              Lawn Mowers
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="hedgetrimmers" className="nav-bar-link">
              Hedge Trimmers
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="worksupport" className="nav-bar-link">
              Work Support
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="powershare" className="nav-bar-link">
              20V PowerShare
            </Link>
          </div>
          <hr />
          <div className="navbar-links">
            <Link to="accessories" className="nav-bar-link">
              Accessories
            </Link>
          </div>
          <hr />
        </ul>
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
