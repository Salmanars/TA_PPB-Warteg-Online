import React, { Component } from "react";
import Masukan from "./Masukan";
import Comment from "./Comment";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [], // Menyimpan data dari Masukan.js
      comments: [], // Menyimpan komentar dari Comment.js
    };
  }

  handleAddInput = (inputData) => {
    this.setState((prevState) => ({
      inputs: [...prevState.inputs, inputData],
    }));
  };

  handleAddComment = (comment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, comment],
    }));
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Feedback and Comments</h2>
        <Masukan onAddInput={this.handleAddInput} />
        <Comment comments={this.state.comments} onAddComment={this.handleAddComment} />
      </div>
    );
  }
}

