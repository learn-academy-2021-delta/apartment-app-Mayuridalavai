import React, { Component } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import mockApts from './mockApts.js'
import {
  BrowserRouter as  Router,
  Routes,
  Route
} from 'react-router-dom'
import ApartmentIndex from './pages/ApartmentIndex'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apts: mockApts
    }
  }

  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex apts={this.state.apts} />} />

        </Routes>
        <Footer />
      </Router>
    )
  }
}
export default App
