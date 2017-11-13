import React from 'react';
import TextField from './TextField'
import Textarea from './Textarea'
import SelectRating from './SelectRating'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:   '',
      rating: '',
      review: '',
      error: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }

  validateInput(input) {
    if (input.trim() === "") {
      let newError = "All fields must be completed."
      this.setState({
        error: newError
      })
    } else {
      this.setState({
        error: ""
      })
    }
  }

  handleInput(event) {
    this.validateInput(event.target.value)
    let newValue = event.target.value;
    let newKey = event.target.name;
    this.setState({
      [newKey]: newValue
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === "" || this.state.rating === "" || this.state.review==="") {
      let newError = "All fields must be completed."
      this.setState({
        error: newError
      })
    } else {
      let newReview = {
        restaurant_id: this.props.restaurantId,
        name: this.state.name,
        rating: this.state.rating,
        content: this.state.review
      }
      this.props.addReview(newReview)
      this.setState({
        name:'',
        rating:'',
        review:''
      })
    }
  }

  render() {
    let errorDiv
    if (this.state.error.length > 0){
      errorDiv = <div className="error">{this.state.error}</div>
    }

    return(
      <div>
        {errorDiv}
        <form onSubmit={this.handleSubmit} >
          <TextField
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <SelectRating
            name="rating"
            label="Rating"
            onChange={this.handleInput}
            selectedOption={this.state.rating}
          />
          <Textarea
            name='review'
            label='Review:'
            value={this.state.review}
            onChange={this.handleInput}
          />
          <input type="hidden" value={this.props.restaurant_id} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default ReviewForm
