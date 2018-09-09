import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import { connect } from "react-redux";
import { updateProducts } from "../../ducks/reducer";

class Home extends Component {
  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.props.updateProducts(res.data);
    });
  }

  render() {
    let productsToDisplay = this.props.products.map((product, i) => {
      return (
        <div key={i}>
          <img src={product.img} alt="" />
          {/* {product.title} */}
        </div>
      );
    });
    return (
      <div>
        <Header />
        Home
        <h4 className="bestsellers">BESTSELLERS</h4>
        {productsToDisplay}
        <div className="img-container">
          <img
            src="https://www.worx.com/media/wysiwyg/GTHP.1533910816.jpg"
            alt=""
          />
        </div>
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
)(Home);

//grid column gap
