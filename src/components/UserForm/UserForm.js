import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../UserForm/UserForm.css';

function UserForm() {
  return (
    <Form>
        <Container fluid className='form-section-container'>
        <Row>
           
        <h1 className='cent-headings'>
            <br></br>
            <br></br>
            Interested in IDEAX?</h1>
        <p className='filloutline'>Fill out the form and a IDEAX representative will get back to you</p>
        </Row>    
        
        <Row>
          <Col xxl={6} lg={6} md={12} sm={12}>
            <br></br>
            <br></br>
            <Form.Control className='float-right' placeholder="Name" />
            <br></br>
            <Form.Control className='float-right' placeholder="Address" />
            <br></br>
            <Form.Control className='float-right' placeholder="Email" />
            <br></br>
            <Form.Control className='float-right' placeholder="City" />
            <br></br>
            <Form.Control className='float-right' placeholder="Phone" />
          </Col>
          <Col xxl={6} lg={6} md={12} sm={12}>
            <br></br>
            <br></br>
            <Form.Control className='questions-form-control' placeholder="Questions" />
            <label className='refer-line ideax-ref'>
            Who referred you to IDEAX?*
            <Form.Control className='ref-form-control' placeholder="Name of person who referred you" />
            </label>
          </Col>
        </Row>
        
        <Row>
            
            <p className='which-products-line'>
            <br></br>
            <br></br>
            Communication is on the Go!
            <br></br>
            </p>
        </Row>
        </Container>
      </Form>
  )
}

export default UserForm;
