import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { disp: false };
    this.state = { num: props.num };
  }

  handleClick() {
    this.setState({ disp: true });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>click to generate list</h1>
        <ul>
          {this.state.disp
            ? this.state.num.map((number) => (
                <li key={number.toString()}>{number}</li>
              ))
            : console.log(this.state)}
        </ul>
      </div>
    );
  }
}
