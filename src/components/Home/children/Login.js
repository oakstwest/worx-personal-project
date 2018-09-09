import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
// import Nav from "../children/Nav";
// import { Link } from "react-router-dom";

export default class Login extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.login}>LOGIN</button>
        <Footer />
      </div>
    );
  }
}
