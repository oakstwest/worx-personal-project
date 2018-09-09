import React, { Component } from "react";
import Header from "../../../../../Header";
import Footer from "../../../../../Footer";

export default class Accessories extends Component {
  handleReverse() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={() => this.handleReverse()}>Back</button>
        <h1>Accessories</h1>
        <Footer />
      </div>
    );
  }
}
