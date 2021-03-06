import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import mockPic from '../mockFile.js'


Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays an heading", () => {
    const homeWrapper = shallow(<Home />)
      const showHeading = homeWrapper.find("h1")

      expect(showHeading.text()).toEqual("Welcome to our Apartments")
    })
    it("displays a apartment picture", () => {
        const home = shallow(<Home />)
        const homeImage = home.find("img")
        expect(homeImage.prop("src")).toEqual(mockPic)
      })
})