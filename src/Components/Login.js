import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);

    this.loggedOut = this.loggedOut.bind(this);

    this.state = { logIn: false };
  }

  loggedIn() {
    this.setState({ logIn: true });
    console.log("LoggedIn");
  }

  loggedOut() {
    this.setState({ logIn: false });
    console.log("LoggedOut");
  }

  render() {
    return (
      <div>
        {this.state.logIn ? (
          <div>
            <h1>You Have Logged In</h1>
            <button onClick={this.loggedOut}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>You Have Logged Out</h1>
            <button onClick={this.loggedIn}>Login</button>
          </div>
        )}
      </div>
    );
  }
}
