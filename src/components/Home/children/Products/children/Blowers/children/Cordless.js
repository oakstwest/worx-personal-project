import React, { Component } from "react";
import Header from "../../../../../Header";
import Footer from "../../../../../Footer";

export default class Cordless extends Component {
  handleReverse() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={() => this.handleReverse()}>Back</button>
        <h1>Cordless</h1>
        <Footer />
      </div>
    );
  }
}
