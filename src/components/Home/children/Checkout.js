import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { Link } from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 53645,
      cart: props.cart
    };
  }

  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.state.amount })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <Link to="/">
        <StripeCheckout
          name="Worx"
          description="Checkout"
          image="http://via.placeholder.com/100x100"
          token={this.onToken}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          amount={this.state.amount}
        />
      </Link>
    );
  }
}

export default Checkout;
