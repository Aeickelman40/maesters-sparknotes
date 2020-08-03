
import React, { Component } from 'react';
import './CommentForm.css'

class CommentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      main_text: "",
      author: "",
    }
  };

  // componentDidMount = async () => {
  //   // const response = await getComments(this.props.shoeId)
  //   // this.props.addComment(...response)
  //   // return response;
  // }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value} );
  }

  handleSubmit = async (event) => {
    // console.log(this.props)
    event.preventDefault();
    const newComment = {
      author: this.state.author,
      main_text: this.state.main_text,
    }
    this.props.saveComment(newComment)
  }

  render() {
    return (
      <section className="comment-section">
          <form className="comment-form">
            <input
                className="name-input input"
                placeholder="Author"
                name="author"
                value={this.state.name}
                onChange={this.handleChange}
            ></input>
            <input
            className="comment-input input"
              name="main_text"
              placeholder="Comment"
              type="text"
              value={this.state.newComment}
              onChange={this.handleChange}
            ></input>
            <button
              className="submitButton commentButton"
              type="submit"
              onClick={ this.handleSubmit }
            >Submit Comment</button>
          </form>
          <h1>Previous Additions to the Library</h1>
        <section className="comments-display">Posted comments will live here in version 1.2, but we do have live updating for the time being!:
          Author Name:
            {this.state.author} 
          Comment:  
            {this.state.main_text}
        </section>
      </section>
        
    )
  }
}
export default CommentForm;