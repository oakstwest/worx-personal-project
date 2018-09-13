import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import Checkout from "./Checkout";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    //retrieve localStorage cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(JSON.parse(localStorage.getItem("cart")));
    //map over array and return only id
    let productIds = cart.map(product => product.product_id);
    console.log(productIds);
    //send id to database to get products
    axios.post("/api/products", { ids: productIds }).then(res => {
      // console.log(res);
      this.setState({ cart: res.data });
    });
  }

  deleteProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter(product => {
      if (id === product.product_id) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    let updatedCartInState = this.state.cart.filter(product => {
      if (id === product.product_id) return false;
      else return true;
    });
    this.setState({ cart: updatedCartInState });
  }

  render() {
    // console.log(this.state.cart);
    let totalCost = 0;

    let cart = [];
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    let mappedCart = this.state.cart.map((item, i) => {
      let quantity = cart.find(product => {
        return product.product_id == item.product_id;
      }).quantity;
      let productCost = item.price * quantity;
      totalCost += productCost;
      return (
        <div key={i}>
          <img src={item.img} alt="" />
          {/* <span>{item.product_id}</span> */}
          <span>{item.title}</span>
          <span>{productCost}</span>
          <span>{quantity}</span>
          <button onClick={() => this.deleteProduct(item.product_id)}>
            DELETE
          </button>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <h1>cart</h1>
        {mappedCart}
        <Checkout amount={totalCost * 100} />
        <Footer />
      </div>
    );
  }
}
