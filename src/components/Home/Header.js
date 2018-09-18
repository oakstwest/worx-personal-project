import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { showNavBar, showSearch, updateUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import Search from "./children/Search";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  //  componentDidMount
  //  endpoint in server that checks session for user
  //  send whether logged in/not
  //  in reducer keep track of value on state
  //  if true = logged in

  async componentDidMount() {
    let userData = await axios.get("/api/user-data");
    this.props.updateUser(userData.data);
  }

  // handleLogin() {
  //   this.setState({
  //     userExist: !false
  //   });
  // }

  // handleLogout() {
  //   this.setState({
  //     userExist: !false
  //   });
  // }

  render() {
    // console.log("%cLOLIHACKEDYOU", "color: orange; font-size: 72px");
    let { user } = this.props;
    return (
      <div>
        <div className="header-container">
          {/* <Link to="/nav"> */}
          <div className="bars">
            <i
              className="fas fa-bars"
              onClick={() => this.props.showNavBar(this.props.showNav)}
            />
          </div>
          {/* </Link> */}
          <Link to="/">
            <img
              className="worx-logo"
              src="https://www.worx.com/skin/frontend/positec/default/images/positec/worx-logo.1534973283.png"
              alt="worx logo"
            />
          </Link>
          <div className="img-container">
            <i
              className="fas fa-search"
              onClick={() => this.props.showSearch(this.props.search)}
            />
            <Link to="/cart" className="cart-link">
              <i className="fas fa-shopping-cart" />
            </Link>
          </div>
          <img
            className="american-flag"
            src="https://www.worx.com/skin/frontend/positec/default/images/flags/flag_en_US.1535637952.jpg"
            alt="American Flag"
          />
        </div>
        {/* <hr /> */}
        <Search />
        <div className="nav">
          <span className="i-container">
            <span className="store-container">
              <i className="fas fa-map-marked-alt" />
              <p>STORES</p>
            </span>
            <span className="call-container">
              <i className="fas fa-phone" />
              <p>CALL</p>
            </span>
            {user.user_id ? (
              <a href={process.env.REACT_APP_LOGOUT}>
                <span onClick={this.handleLogout}>
                  <i className="fas fa-user" />
                  <p>LOG OUT</p>
                </span>
              </a>
            ) : (
              <Link to="/login">
                <span onClick={this.handleLogin}>
                  <i className="fas fa-user" />
                  <p>SIGN IN</p>
                </span>
              </Link>
            )}
            {/* <Link to="/login">
              <span>
                <i className="fas fa-user" />
                <p>SIGN IN</p>
              </span>
            </Link> */}
          </span>
        </div>
        {/* <hr /> */}
        <Link to="/accessories">
          <img
            alt="Buy More, Save More"
            className="mobile-img"
            src="https://sb.monetate.net/img/1/816/1694908.png"
          />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showNav: state.showNav,
    search: state.search,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { showNavBar, showSearch, updateUser }
)(Header);
