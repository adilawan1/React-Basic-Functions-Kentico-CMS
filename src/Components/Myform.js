import React, { Component } from "react";

export default class Myform extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.state = {
      name: this.props.name,
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { value: "" };
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  handleChange(e) {
    console.log(e.target);
    this.setState({ value: e.target.value });
  }

  handleChange1(e) {
    console.log(e.target);
    this.setState({ value: e.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            My first Input:
            <br />
            <textarea
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
            <br />
            <select value={this.state.value} onChange={this.handleChange1}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <br />
          </label>
          <input type="submit" value="submit"></input>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
