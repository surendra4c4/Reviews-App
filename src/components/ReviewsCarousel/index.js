// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  rightArrow = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            className="btn"
            onClick={this.leftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} className="image" />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="btn"
            onClick={this.rightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
