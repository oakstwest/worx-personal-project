import React, { Component } from "react";

export default class FooterSubsciption extends Component {
  render() {
    return (
      <div className="footer-subscription">
        <strong>
          <span className="sub-today">SUBSCRIBE TODAY TO SAVE 10%</span>
        </strong>
        <h6 className="sub-today">Get Our Newsletter</h6>
        <input type="text" className="subscription-input" />
        <br />
        <br />
        <button className="subscribe">SUBSCRIBE</button>
        <h3>CALL US</h3>
        <p>855-279-0505</p>
        <h3>ABOUT WORX</h3>
        <p>
          WORX users look forward to the next project. That’s because WORX tools
          are designed to easily tackle every task for your home, your yard, and
          your workshop.
        </p>
        <p>
          WORX tools are built on a platform of innovation, power and
          performance. They’re engineered with superior technology and value
          built into every contemporary design, so you can perform with
          precision. WORX makes it easier to get the toughest jobs done faster.
          Shop string trimmers, blowers, chainsaws, mowers, DIY tools and more.
        </p>
        <h6>Do it yourself. Do it better. Do it with WORX.</h6>
      </div>
    );
  }
}
