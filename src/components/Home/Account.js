import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
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
        <h4>My Account</h4>
        {user.given_name ? (
          <div>
            <h6>
              Hello, {user.given_name} {user.family_name}!
            </h6>
            <p>
              From your My Account Dashboard you have the ability to view a
              snapshot of your recent account activity and update your account
              information. Select a link below to view or edit information.
            </p>
            <h3>ACCOUNT INFORMATION</h3>
            <br />
            <ul>
              <h5>NAME</h5> {user.given_name} {user.family_name}
              <h5>EMAIL</h5> {user.email}
              <h5>PASSWORD</h5> <Link to="/accountinfo">Change Password</Link>
            </ul>
            <h3>SUBSCRIPTION INFORMATION</h3>
            <h6>SUBSCRIBED TO:</h6>{" "}
            <p>You are currently not subscribed to any newsletter.</p>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>Logout</button>
            </a>
            <Link to="/">
              <button onClick={() => this.deleteAcct(user.user_id)}>
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
