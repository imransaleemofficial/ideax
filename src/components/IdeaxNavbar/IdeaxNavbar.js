import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../IdeaxNavbar/IdeaxNavbar.css';
import { AiOutlineFileSearch } from 'react-icons/ai';

function IdeaxNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className='navbar-color'>
      <Container fluid className=''>
        <Navbar.Brand href="#" className='navbar-font'>IDEAX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home" className='navbar-font'>HOME</Nav.Link>
            <Nav.Link href="login" className='navbar-font'>LOGIN</Nav.Link>
            <Nav.Link href="signup" className='navbar-font'>SIGNUP</Nav.Link>
            <Nav.Link href="entrepreneur" className='navbar-font'>ENTREPRENEUR</Nav.Link>
            <Nav.Link href="investor" className='navbar-font'>INVESTOR</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className='navbar-font'>
              <NavDropdown.Item href="#action3" className='navbar-font'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='navbar-font'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='navbar-font'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search For IDEAX"
              className="me-2 input-search"
              aria-label="Search"
            
            />
            <Button className='input-search search button' variant="outline-dark"><AiOutlineFileSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default IdeaxNavbar;
