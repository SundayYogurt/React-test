import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <div className="image">
            <img src={this.props.profile} />
          </div>
          <div className="data">
            <ul>
              <li>Name: {this.props.name}</li>
              <li>Section: 66/110</li>
              <li>Major: Software Engineer</li>
              <li>Faculty: Science and technology</li>
              <li>University: Rajabhat Nakonpathom</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
