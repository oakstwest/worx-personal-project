import React, { Component } from "react";
// import Header from "../../../Home/Header";
import axios from "axios";
import Blowers from "./children/Blowers/Blowers";

export default class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    let productsToDisplay = this.state.products.map((product, i) => {
      return <div key={i}>{product.title}</div>;
    });
    return (
      <div>
        {/* <Header /> */}
        <h1>Products</h1>
        {productsToDisplay}
        <Blowers productsToDisplay={productsToDisplay} />
      </div>
    );
  }
}
