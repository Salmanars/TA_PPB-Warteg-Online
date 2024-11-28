import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Masukan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inputData = { ...this.state }; // Data masukan
    this.props.onAddInput(inputData); // Kirim data ke parent
    this.setState({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h4>Masukan Anda</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="text"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}