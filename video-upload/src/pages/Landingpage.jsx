

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Landingpage() {
  return (
    <div>
      
    <Row className='align-item-center'>

    <Col></Col>
    <Col lg={6}>
        <h1>Welcome to Videoooo.com</h1>
        <p style={{textAlign:'justify'}}>where user can use their favourate videos user can upload any youtube videos by copy and paste their url. videooo.com will allow to add and remove their upload videos and also arrange  them in different catagories by drag and drop .its is free try it now!!!!!!  </p>
        <button className='btn btn-primary'>click here to know more!!!</button>
    </Col>

    <Col lg={4}>
        <img className='img-fluid' width={250} src="https://pbs.twimg.com/profile_images/1431129444362579971/jGrgSKDD_400x400.jpg" alt="no image" />
    </Col>
    <Col></Col>
    </Row>

    </div>
  )
}

export default Landingpage
