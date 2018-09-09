import React, { Component } from "react";
import axios from "axios";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`).then(resp => {
      this.setState({ product: resp.data[0] });
    });
  }

  render() {
    return <div>Details</div>;
  }
}
