import React, { Component } from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import axios from "axios";
import { updateProducts } from "../../../../../../ducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Blowers extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
    // this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.props.updateProducts(res.data);
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
    /*

    1. map over this.state.cart
    2. check if id = id already in cart
    3. if yes = increment quantity
    4. if no = create new object
    5. update cart in state
    6. update localStorage in 2nd argument

    */
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
      // console.log(product);
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
    console.log(this.state.cart);
    return (
      <div>
        <Header />
        <h5>Blowers</h5>
        <div>
          <Link to="/blowerscordless">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/cordless-blowers-subcat-image.1473361936.jpg"
              alt=""
            />
            <h5>CORDLESS LEAF BLOWERS</h5>
          </Link>
        </div>
        <div>
          <Link to="/blowerselectric">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/corded-blowers-subcat-image.1473361936.jpg"
              alt=""
            />
            <h5>ELECTRIC LEAF BLOWERS & MULCHERS</h5>
          </Link>
        </div>
        <div>
          <Link to="/blowersaccessories">
            <img
              src="https://www.worx.com/media/catalog/category/subcat_image/resize/321x198/blower-acc-subcat-image-v2.1473361936.jpg"
              alt=""
            />
            <h5>BLOWERS & MULCHERS ACCESSORIES</h5>
          </Link>
        </div>

        <h3>TOP ITEMS IN LEAF BLOWERS & MULCHERS</h3>
        {productsToDisplay}
        <div className="category-paragraph">
          <h2>CORDLESS & ELECTRIC LEAF BLOWERS - MULCHERS</h2>
          <p>
            Keep your yard free of debris by choosing from the WORX selection of
            the best leaf blowers and mulchers. When leaves pile up and other
            stray items litter your landscape, you can literally blow it away
            and bag it up.
          </p>

          <p>
            Our arsenal of yard tools extends to fit any DIY project. Whether
            it’s a commercial lot or a residential space, you’ll be able to
            clear your yard in no time. We have several leaf blower options to
            make it convenient for everyone. Choose from our Cordless Leaf
            Blowers, Electric Leaf Blowers & Mulchers, and Blowers & Mulchers
            Accessories.
          </p>

          <p>
            With our cordless leaf blower options, you don’t have to worry about
            tripping over cords or being limited to space. You can use your leaf
            blower or mulcher freely about the yard as well as your workshop or
            garage. Don’t waste time constantly sweeping out debris, when
            cleanup can be performed more effectively with one of our hand-held
            or backpack leaf blowers.
          </p>

          <p>
            Many of our machines weigh 4 lbs. or less and give you ample time to
            power through a job with ease and efficiency. Our battery-powered
            and electric leaf blowers make it easier to navigate around
            stationary items, so you don’t have to bend and lift heavy boxes and
            equipment, or become blocked by immovable things. Arduous chores
            become a cinch with a cordless leaf blower or mulcher.
          </p>

          <p>
            Better yet, these yard tools aren’t only limited to taming your
            yard. They can be used for swift cleaning of your shed, garage, or
            cleaning up empty pools. Our popular 20V GT 2.0 Trimmer & AIR Blower
            Combo Kit is a favorite for miscellaneous home improvement tasks due
            to its 8 included attachments and bonus deflator used to deflate
            mattresses, pool toys, and rafts. It also features a string trimmer
            that converts to a wheeled edger within seconds. When you have tools
            this efficient at your disposal, it can change the way you approach
            your DIY projects for the better.
          </p>

          <p>
            Another popular choice for homeowners is the 13 AMP Electric Leaf
            Mulcher, which has a design ideal for compact storage. Rather than
            cluttering your shed or garage with another piece of equipment, the
            mulcher folds down and can be hidden away when not in use. With this
            tool, the mulching process is made simpler. Simply drop chopped
            debris and leaves directly into an attached bag for easy disposal or
            composting.
          </p>

          <p>
            WORX tools continue to top “best of” lists due to the usability and
            affordability our products offer. For example, Men’s Journal
            highlighted our WORX AIR Cordless Blower due to this cordless leaf
            blower's ability to “clean where gas-powered model can’t, like
            inside the garage.”
          </p>

          <p>
            Our customers know they can count on our quality lawn and garden
            tools with features designed specifically for DIY projects. We want
            people who purchase WORX products to feel comfortable with their use
            and continue to add our tools to their collection.
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
)(Blowers);
