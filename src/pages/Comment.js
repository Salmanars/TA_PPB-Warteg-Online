import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Comment extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        newComment: "",
      };
    }
  
    handleInputChange = (e) => {
      this.setState({ newComment: e.target.value });
    };
  
    handleAddComment = () => {
      if (this.state.newComment.trim() !== "") {
        this.props.onAddComment(this.state.newComment); // Kirim komentar ke parent
        this.setState({ newComment: "" });
      }
    };
  
    render() {
      const { comments = [] } = this.props; // Memberikan array kosong jika comments undefined
  
      return (
        <div>
          <h4>Comments</h4>
          <textarea
            value={this.state.newComment}
            onChange={this.handleInputChange}
            placeholder="Write your comment here..."
          />
          <Button onClick={this.handleAddComment}>Add Comment</Button>
  
          <ul>
            {comments.length === 0 ? (
              <p>No comments yet!</p>
            ) : (
              comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))
            )}
          </ul>
        </div>
      );
    }
  }
  