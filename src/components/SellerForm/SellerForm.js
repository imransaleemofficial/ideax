import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Previews from '../SellerDropZone/SellerDropZone';
import '../SellerForm/SellerForm.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import laptopimage from '../source/images/BuyerFormImage/laptop.jpg';

function SellerForm() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    idea: '',
    description: '',
    price: '',
  }
  const [formData, setFormData] = useState(initialValues);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const validation = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = '*Name is required';
    } else if (!validateName(formData.name)) {
      errors.name = "*Name should start with a capital letter and only contain letters and spaces";
    }
  
    if (!values.email) {
      errors.email = '*Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = '*Invalid email address';
    }
    if (!values.phone) {
      errors.phone = '*Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = '*Phone number should have between 7 to 15 digits';
    }
    if (!values.idea) {
      errors.idea = '*Idea name is required';
    } else if (!isIdeaNameStartsWithCapitalLetter(formData.idea)) {
      errors.idea = '*Idea Name should start with a capital letter';
    }
    if (!values.description) {
      errors.description = '*Idea Description is required';
    } else if (!validateDescription(formData.description)) {
      errors.description = "*Description should contain between 50 and 1000 words";
    }
    if (!values.price) {
      errors.price = '*Price is required';
    } else if (!isPositiveNumber(formData.price)) {
      errors.price = '*Price must be a positive number greater than zero';
    }
    
    return errors;
  }

  function validateName(name) {
    const regex = /^[A-Z][a-zA-Z ]+$/;
    return regex.test(name);
  }
  
  function isIdeaNameStartsWithCapitalLetter(idea) {
    const firstLetter = idea.charAt(0);
    return firstLetter === firstLetter.toUpperCase();
  } 

  function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{7,15}$/;
    return phoneRegex.test(phone);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isPositiveNumber(value) {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue > 0;
  }

  function validateDescription(description) {
    const words = description.trim().split(/\s+/);
    return words.length >= 50 && words.length <= 1000;
  }

  function handleNameKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\d/.test(keyValue)) {
      event.preventDefault();
    }
  }

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send data and files to server using API
   
    const newErrors = validation(formData);
    setErrors(newErrors);
      console.log("errors" , errors)
    if (Object.keys(newErrors).length === 0) {
    }
  }

  function handlePhoneKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\D/.test(keyValue)) {
      event.preventDefault();
    }
  }

  return (
    
    <div>
      <h1 className="register-entrepreneur">
    <br></br>
    Register yourself as Entrepreneur & Rule the World!
    </h1>
    <br></br>
      <Container fluid>
      <Row>
        <Col>
        <form onSubmit={handleSubmit} className="sellerform">
     

      <label className='name-label'>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} onKeyPress={handleNameKeyPress} className="name"/>
      </label>
      {errors.name && <p className='error-msg'>{errors.name}</p>}
      
      <label className='name-label'>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="email"/>
      </label>
      {errors.email && <p className='error-msg'>{errors.email}</p>}
      
      <label className='name-label'>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} onKeyPress={handlePhoneKeyPress} className="phone"/>
      </label>
      {errors.phone && <p className='error-msg'>{errors.phone}</p>}
      
      <label className='name-label'>
        Idea Name:
        <input type="text" name="idea" value={formData.idea} onChange={handleInputChange}  className="idea"/>
      </label>
      {errors.idea && <p className='error-msg'>{errors.idea}</p>}
      
      <label className='name-label'>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} className='description'/>
      </label>
      {errors.description && <p className='error-msg'>{errors.description}</p>}
      
      <label className='name-label'>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleInputChange} className=""price/>
      </label>
      {errors.price && <p className='error-msg'>{errors.price}</p>}
      
      
      
      <p>
        <Previews/>
      
      </p>
      
      <button type="submit" className='submitbtn'>Submit</button>
    
    </form>
        </Col>

        <Col>
        <img className='laptop-image-seller' src={laptopimage} alt="laptop"/>
        </Col>


      </Row>
    </Container>
    </div>
    
    
  );
}

export default SellerForm;