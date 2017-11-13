import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import RestaurantForm from '../components/RestaurantForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.addReview = this.addReview.bind(this)
    this.addRestaurant = this.addRestaurant.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  // Add review function will be called by ReviewForm in it's onSubmit function and update this.state to add the new review
  addReview(newReview) {
    let newReviews = this.state.reviews.concat([newReview])
    this.setState({
      reviews: newReviews
    })
  }

  addRestaurant(newRestaurant) {
    let newRestaurants = this.state.restaurants.concat([newRestaurant])
    this.setState({
      restaurants: newRestaurants
    })
  }

  render() {
    let restaurantComponents = this.state.restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div id="restaurants" className="small-3 columns">
            <h1>Restaurants</h1>
            {restaurantComponents}
            <RestaurantForm
              addRestaurant={this.addRestaurant}
            />
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews
              data={relevantReviews}
            />
            <ReviewForm
              addReview={this.addReview}
              restaurantId={this.state.selectedId}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App