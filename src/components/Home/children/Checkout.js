import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { Link } from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 53645
    };
    this.reset = this.reset.bind(this);
  }

  reset() {
    localStorage.setItem("cart", JSON.stringify([]));
    window.location.href = "/#/";
  }

  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.props.amount })
      .then(res => {
        console.log(res);
        this.reset();
      });
  };

  render() {
    return (
      <StripeCheckout
        name="Worx"
        description="Checkout"
        image="https://www.worx.com/skin/frontend/positec/default/images/positec/worx-logo.1535637952.png"
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={this.props.amount}
      />
    );
  }
}

export default Checkout;
