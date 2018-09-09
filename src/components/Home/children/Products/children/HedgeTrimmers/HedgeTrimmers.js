import React, { Component } from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import axios from "axios";
import { updateProducts } from "../../../../../../ducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HedgeTrimmers extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.props.updateProducts(res.data);
    });

    let cart = JSON.parse(localStorage.getItem("cart"));
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
    let productsToDisplay = this.props.products.map((product, i) => {
      return (
        <div key={i} className="products">
          <img src={product.img} alt="" className="product-image" />
          {product.title}
          <br />
          {product.price}
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
        <h5>Hedge Trimmers</h5>

        <h3>TOP ITEMS IN HEDGE TRIMMERS & CLIPPERS</h3>
        {productsToDisplay}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.allProducts
  };
}

export default connect(
  mapStateToProps,
  { updateProducts }
)(HedgeTrimmers);
