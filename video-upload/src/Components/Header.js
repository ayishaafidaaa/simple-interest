

import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Upload } from 'react-feather';

function Header() {
  return (
    <div>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
           <Upload/>
          <span className='ms-4'>Video Upload </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
