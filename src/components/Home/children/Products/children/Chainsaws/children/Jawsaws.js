import React, { Component } from "react";
import Header from "../../../../../Header";
import Footer from "../../../../../Footer";
import FooterSubscription from "../../../../../FooterSubscription";
import axios from "axios";

export default class Jawsaws extends Component {
  constructor() {
    super();

    this.state = {
      jawsaws: [],
      cart: []
    };
  }

  componentDidMount() {
    axios.get("/api/category/Saws").then(res => {
      this.setState({
        jawsaws: res.data
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
    console.log(this.state.jawsaws);
    let productsToDisplay = this.state.jawsaws.map((product, i) => {
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
        Jawsaws
        {productsToDisplay}
        <FooterSubscription />
        <Footer />
      </div>
    );
  }
}
