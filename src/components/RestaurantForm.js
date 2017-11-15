import React from 'react';
import TextField from './TextField';

class RestaurantForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      location:'',
      image:''
    }

    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameInput(event) {
    let newValue = event.target.value;
    let newKey = event.target.name
    let newState = {[newKey]: newValue}

    this.setState(newState)
  }

  handleSubmit(event) {
    event.preventDefault();

    let restaurantId = this.state.name.toLowerCase().replace(' ', '-')

    let newRestaurant = {
      id: restaurantId,
      name: this.state.name,
      location: this.state.location,
      image: this.state.image
    }
    this.props.addRestaurant(newRestaurant)

    this.setState({
      name:'',
      location:'',
      image:''
    })
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit} >
        <TextField
          name='name'
          label='Restaurant:'
          onChange={this.handleNameInput}
          value={this.state.name}
        />
        <TextField
          name='location'
          label="Location"
          onChange={this.handleNameInput}
          value={this.state.location}
        />
        <TextField
          name='image'
          label="Image URL"
          onChange={this.handleNameInput}
          value={this.state.image}
        />
        <input type='submit' />
      </form>
    )
  }
}

export default RestaurantForm
