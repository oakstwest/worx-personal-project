import React, { Component } from "react";
import Header from "../../../../../Header";
import axios from "axios";
import Footer from "../../../../../Footer";
import FooterSubscription from "../../../../../FooterSubscription";

export default class Cordless extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: []
    };
  }

  componentDidMount() {
    axios.get("/api/category/Blowers & Mulchers - Cordless").then(res => {
      this.setState({
        products: res.data
      });
    });
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    this.setState(
      {
        cart: cart ? cart : []
      },
      () => {
        console.log(this.state.cart);
      }
    );
  }

  addToCart(id) {
    let flag = false;
    let newArr = this.state.cart.map(product => {
      if (id === product.product_id) {
        flag = true;
        product.quantity++;
        return product;
      } else {
        return product;
      }
    });
    let newProduct = {
      product_id: id,
      quantity: 1
    };
    this.setState(
      {
        cart: flag ? newArr : [...newArr, newProduct]
      },
      () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      }
    );
  }

  render() {
    let productsToDisplay = this.state.products.map((product, i) => {
      return (
        <div key={i} className="products">
          <img src={product.img} alt="" />
          {product.title}
          <br />
          <p>${product.price}</p>
          <button onClick={() => this.addToCart(product.product_id)}>
            ADD TO CART
          </button>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <Header />
        Blowers & Mulchers > Cordless
        {productsToDisplay}
        <FooterSubscription />
        <Footer />
      </div>
    );
  }
}
