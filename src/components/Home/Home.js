import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import FooterSubscription from "./FooterSubscription";
import { connect } from "react-redux";
import { updateProducts } from "../../ducks/reducer";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("/api/category/Turbine Leaf Blowers").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    let productsToDisplay = this.state.products.map((product, i) => {
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
        <h4 className="bestsellers">BESTSELLERS</h4>
        {productsToDisplay}
        <div className="img-container">
          <img
            src="https://www.worx.com/media/wysiwyg/GTHP.1533910816.jpg"
            alt=""
          />
          <br />
          <img
            src="https://www.worx.com/media/wysiwyg/HSHP.1522086816.jpg"
            alt=""
          />
          <br />
          <img
            src="https://www.worx.com/media/wysiwyg/WG750HP.1518540618.jpg"
            alt=""
          />
          <img src="" alt="" />
          <br />
        </div>
        <FooterSubscription />
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
