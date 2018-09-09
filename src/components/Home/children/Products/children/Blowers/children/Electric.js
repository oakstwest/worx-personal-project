import React, { Component } from "react";
import Header from "../../../../../Header";
import Footer from "../../../../../Footer";

export default class Electric extends Component {
  handleReverse() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={() => this.handleReverse()}>Back</button>
        <h3>Electric</h3>
        <Footer />
      </div>
    );
  }
}
