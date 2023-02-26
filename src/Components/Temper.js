import React, { Component } from "react";
const scales = {
  c: "Celcius",
  f: "Fahrenheit",
};

export default class Temper extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {scales[this.props.scale]}</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
