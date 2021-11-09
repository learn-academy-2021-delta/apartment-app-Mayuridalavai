import React, { Component } from 'react'
import aptImage from '../assets/aptimage.png'


class Home extends Component {
  render() {
    return (
        <div className="page-body">
      <h1>Welcome to our Apartments</h1>
      <img src={aptImage} alt="Apartment layout" className="aptimage"/>
       </div>
    )
  }
}
export default Home