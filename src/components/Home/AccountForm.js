import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FooterSubscription from "./FooterSubscription";
import axios from "axios";

class AccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      user: {},
      given_name: "",
      family_name: "",
      email: "",
      select: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  async componentDidMount() {
    let userData = await axios.get("/api/user-data");
    this.props.updateUser(userData.data);
  }

  //put to update account details

  handleChange(e) {
    this.setState({
      show: e.target.checked
    });
  }

  handleSelect(e) {
    this.setState({ select: e.target.value });
  }

  updateUser(user) {
    console.log(user);
    let updatedUser = {
      given_name: this.state.given_name
        ? this.state.given_name
        : user.given_name,
      family_name: this.state.family_name
        ? this.state.family_name
        : user.family_name,
      email: this.state.email ? this.state.email : user.email,
      select: this.state.select ? this.state.select : user.region
    };
    axios.put(`/api/users/${user.user_id}`, updatedUser).then(res => {
      console.log(res);
      this.props.updateUser(res.data[0]);
    });
    if (updatedUser) {
      alert("Your details have been updated!");
    }
  }

  render() {
    let { user } = this.props;
    console.log(user.user_id);
    return (
      <div>
        <Header />
        <div className="account-form">
          <h5>ACCOUNT INFORMATION</h5>
          <h6>FIRST NAME</h6>
          <input
            className="acct-input"
            type="text"
            defaultValue={user.given_name}
            onChange={e => this.setState({ given_name: e.target.value })}
          />
          <h6>LAST NAME</h6>
          <input
            className="acct-input"
            type="text"
            defaultValue={user.family_name}
            onChange={e => this.setState({ family_name: e.target.value })}
          />
          <h6>EMAIL</h6>
          <input
            className="acct-input"
            type="text"
            defaultValue={user.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <h6>US REGION</h6>

          <select
            className="acct-input"
            value={this.state.select}
            id="mySelect"
            onChange={e => this.setState({ select: e.target.value })}
          >
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>

          <p>
            <input type="checkbox" onChange={e => this.handleChange(e)} />{" "}
            Change Password
            <br />
          </p>
          {this.state.show ? <h4>CHANGE PASSWORD</h4> : null}
          {/* <br /> */}
          {this.state.show ? <h5>CURRENT PASSWORD</h5> : null}
          {this.state.show ? <input /> : null}
          <br />
          {this.state.show ? <h5>NEW PASSWORD</h5> : null}
          {this.state.show ? <input /> : null}
          <br />
          {this.state.show ? <h5>CONFIRM PASSWORD</h5> : null}
          {this.state.show ? <input /> : null}
          <br />
          <Link to="/account">
            <button onClick={() => this.updateUser(user)}>SAVE</button>
          </Link>

          <br />
          <Link to="/account">Cancel</Link>
        </div>
        <FooterSubscription />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(AccountForm);
