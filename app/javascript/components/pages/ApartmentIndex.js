import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

class ApartmentIndex extends Component {
  render() {
    return (
      <div className="page-body">
   <h3>Here are Apartment List!</h3>
<br />
  <Col sm="6">
    {this.props.apts.map(apt => {
      return (
        <Card body key={apt.id}>
          <CardTitle>
            <h4>{apt.street}</h4>
          </CardTitle>
        </Card>
      )
    })}
  </Col>
       
      </div>
      
    )
  }
}
export default ApartmentIndex