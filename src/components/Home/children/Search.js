import React, { Component } from "react";
import { connect } from "react-redux";
import { showSearch } from "../../../ducks/reducer";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }

  handleSearch(val) {
    this.setState({ search: val });
  }
  render() {
    console.log(this.props);
    return (
      <div
        className="search-bar"
        style={this.props.search ? { height: "300px" } : { height: "0px" }}
      >
        <input
          type="text"
          onChange={e => this.handleSearch(e.target.value)}
          className="input"
          placeholder="Search"
        />
        <button className="search-bar-button">
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(
  mapStateToProps,
  { showSearch }
)(Search);
