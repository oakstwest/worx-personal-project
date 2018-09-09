import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <h3>PRODUCTS</h3>
        <ul>
          <li>
            <Link to="/blowers"> Blowers & Mulchers </Link>
          </li>
          <li>
            <Link to="/trimmers"> Trimmers & Edgers </Link>
          </li>
          <li>
            <Link to="/chainsaws"> Chainsaws </Link>
          </li>
          <li>
            <Link to="/powertools"> Power Tools </Link>
          </li>
          <li>
            <Link to="/portable"> Portable Power Chargers </Link>
          </li>
          <li>
            <Link to="/yardcarts"> Yard Carts </Link>
          </li>
          <li>
            <Link to="/lawnmowers"> Lawn Mowers </Link>
          </li>
          <li>
            <Link to="/hedgetrimmers"> Hedge Trimmers </Link>
          </li>
          <li>
            <Link to="/worksupport"> Work Support </Link>
          </li>
          <li>
            <Link to="/powershare"> 20V PowerShare </Link>
          </li>
          <li>
            <Link to="/accessories"> Accessories </Link>
          </li>
        </ul>
        <h3>SERVICE & SUPPORT</h3>
        <ul>
          <li>
            <Link to="/blowers"> Blowers & Mulchers </Link>
          </li>
          <li>
            <Link to="/trimmers"> Trimmers & Edgers </Link>
          </li>
          <li>
            <Link to="/chainsaws"> Chainsaws </Link>
          </li>
          <li>
            <Link to="/powertools"> Power Tools </Link>
          </li>
          <li>
            <Link to="/portable"> Portable Power Chargers </Link>
          </li>
          <li>
            <Link to="/yardcarts"> Yard Carts </Link>
          </li>
          <li>
            <Link to="/lawnmowers"> Lawn Mowers </Link>
          </li>
          <li>
            <Link to="/hedgetrimmers"> Hedge Trimmers </Link>
          </li>
          <li>
            <Link to="/worksupport"> Work Support </Link>
          </li>
        </ul>
        <h3>COMPANY</h3>
        <ul>
          <li>
            <Link to="/blowers"> Blowers & Mulchers </Link>
          </li>
          <li>
            <Link to="/trimmers"> Trimmers & Edgers </Link>
          </li>
          <li>
            <Link to="/chainsaws"> Chainsaws </Link>
          </li>
          <li>
            <Link to="/powertools"> Power Tools </Link>
          </li>
          <li>
            <Link to="/portable"> Portable Power Chargers </Link>
          </li>
          <li>
            <Link to="/account"> My Account </Link>
          </li>
          <li>
            <Link to="/lawnmowers"> Lawn Mowers </Link>
          </li>
        </ul>
        <h3>NEWS & PRESS</h3>
        <ul>
          <li>
            <Link to="/blowers"> Blowers & Mulchers </Link>
          </li>
          <li>
            <Link to="/trimmers"> Trimmers & Edgers </Link>
          </li>
        </ul>
      </div>
    );
  }
}
