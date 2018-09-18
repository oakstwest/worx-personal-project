import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import FooterSubscription from "../Home/FooterSubscription";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    let userData = await axios.get("/api/user-data");
    this.props.updateUser(userData.data);

    axios.get(`/api/user-data/${this.props.user.user_id}`).then(resp => {
      this.setState({ user: resp.data });
      // this.props.updateUser(resp.data);
    });
  }

  deleteAcct(id) {
    axios.delete(`/api/user-data/${id}`).then(resp => {
      this.props.updateUser({});
    });
  }

  render() {
    console.log(this.props.user.user_id);
    let { user } = this.props;
    //logged in user: {user_name, 'tessa', email: 'fdsa' etc...}
    //no login user: {}
    return (
      <div>
        <Header />
        <div>
          <h4 className="my-account">My Account</h4>
        </div>
        {user.given_name ? (
          <div>
            <h6 className="hello-user">
              Hello, {user.given_name} {user.family_name}!
            </h6>
            <p className="account-p">
              From your My Account Dashboard you have the ability to view a
              snapshot of your recent account activity and update your account
              information. Select a link below to view or edit information.
            </p>
            <h3 className="account-info-name">ACCOUNT INFORMATION</h3>
            <br />
            <ul>
              <h5 className="acct-info-h">NAME</h5> {user.given_name}{" "}
              {user.family_name}
              <h5 className="acct-info-h">EMAIL</h5> {user.email}
              <h5 className="acct-info-h">PASSWORD</h5>{" "}
              <Link to="/accountinfo" className="account-info">
                Change Password
              </Link>
            </ul>
            <h3 className="sub-info">SUBSCRIPTION INFORMATION</h3>
            <h6>SUBSCRIBED TO:</h6>{" "}
            <p>You are currently not subscribed to any newsletter.</p>
            <br />
            <Link to="/accountinfo" className="account-info">
              Edit Account Information
            </Link>
            <br />
            <br />
            <a href={process.env.REACT_APP_LOGOUT}>
              <button className="logout">Logout</button>
            </a>
            <Link to="/">
              <button
                onClick={() => this.deleteAcct(user.user_id)}
                className="delete"
              >
                DELETE
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <p>Please log in.</p>
            </Link>
          </div>
        )}
        <FooterSubscription />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

//this.props = Object.assign(this.props, state)

export default connect(
  mapStateToProps,
  { updateUser }
)(Account);
