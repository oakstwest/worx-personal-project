import React, { Component } from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import axios from "axios";
import { updateProducts } from "../../../../../../ducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Chainsaws extends Component {
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
      () => localStorage.setItem("cart", JSON.stringify(this.state.cart))
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
    // console.log(this.state.cart);
    return (
      <div>
        <Header />
        <h5>CHAINSAWS</h5>
        <div>
          <Link to="/jawsaws">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/jawsaws-subcat-image.1473362194.jpg"
              alt="jawsaw"
            />
            <h5>JAWSAWS</h5>
          </Link>
        </div>
        <div>
          <Link to="/polesaws">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/chainsaws-subcat-image.1473362194.jpg"
              alt="chainsaw"
            />
            <h5>CHAINSAWS & POLE SAWS</h5>
          </Link>
        </div>
        <div>
          <Link to="/chainsawaccessories">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/chainsaw-acc-subcat-image_1.1473362194.jpg"
              alt="chainsaw blade"
            />
            <h5>CHAINSAW & JAWSAW ACCESSORIES</h5>
          </Link>
        </div>
        <h3>TOP ITEMS IN CHAINSAWS & POLE SAWS</h3>
        {productsToDisplay}
        <div className="category-paragraph">
          <h2>CORDLESS & ELECTRIC CHAINSAWS AND POLE SAWS</h2>

          <p>
            Nothing says yard tools quite like a chainsaw. An electric or
            battery powered chainsaw is a must have addition to any garage.
            However, WORX chainsaws aren’t your average yard tool. Their
            award-winning designs have received high ratings and top
            recommendations across the board.The Denver Post listed the popular
            JawSaw electric chainsaw model in its top five favorite home and
            garden tools. And, Men’s Health added it to their list of 99 Best
            Tools For Men. When it comes to cutting through limbs and chopping
            up branches, our collection of battery and electric chainsaws is
            well-received and in high demand.
          </p>

          <p>
            We have reinvented the way people are able to use chainsaws and pole
            chain saws. Safety and efficiency are our primary focus areas when
            developing our tools, especially our catalog of chainsaws. Automatic
            lubrication and an easy-to-grasp handle, combined with the only
            fully-enclosed frame, makes our JawSaw 5 Amp Electric Chainsaw the
            safest chainsaw on the market.
          </p>

          <p>
            As the name indicates, the steel teeth hold debris in its “jaw” to
            create greater stability when cutting. This leads to improved safety
            while maintaining a complete sense of being in control of your yard
            work. The craftsmanship and technology of our corded and cordless
            chainsaws allows anyone to take on any landscaping job that needs to
            be done without having to worry about figuring out cumbersome, heavy
            types of machinery. WORX chainsaws and pole chain saws are designed
            with the DIY consumer in mind to make the workload easier for those
            who spend ample time in the yard. When the task comes along of
            cutting branches or cleaning up fallen limbs, our battery-powered
            and electric chainsaws have the power to handle any home project.
            Complete your job with a WORX chainsaw quicker and more efficiently
            than with a cumbersome, heavy chainsaw.
          </p>

          <p>
            An automatic chain oiler extends the life of your chainsaw’s bar and
            chain and a patented auto-tension system ensures your electric or
            battery powered chainsaw is always set at the proper tension. The
            versatility of our product line also offers a JawSaw 5-Foot
            Extension Pole which helps you extend your reach up to 12 feet
            without having to climb up and down a ladder or bypassing the areas
            that are more difficult to access.
          </p>

          <p>
            We stand behind the quality and multi-purpose design of our corded
            and cordless chainsaws and pole saws to ensure that each customer
            who purchases one of our tools is satisfied with the results. We ask
            our customers to provide feedback on the design, comfort, features,
            performance, and ease of use of our lawn tools and have received
            5-star reviews for our chainsaws in every category. WORX delivers
            high-performance, high-powered tools at an affordable cost perfect
            for the everyday user. Experience for yourself how our corded and
            cordless chainsaws are safer and better equipped to handle your
            various DIY projects than your traditional chainsaws of the past.
          </p>
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
)(Chainsaws);
