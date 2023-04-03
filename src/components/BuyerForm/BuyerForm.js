import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BuyerDropZone from '../BuyerDropZone/BuyerDropZone';
import '../BuyerForm/BuyerForm.css';
import laptopimage from '../source/images/BuyerFormImage/laptop.jpg';

function BuyerForm() {

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    username: '',
    about: '',
    age:'',
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
    if (!values.username) {
      errors.username = '*Username is required';
    } else if (!isUsernameStartsWithCapitalLetter(formData.username)) {
      errors.username = '*Username should start with a capital letter';
    }
    if (!values.about) {
      errors.about = '*About yourself is required';
    } else if (!validateAbout(formData.about)) {
      errors.about = "*About Yourself should contain between 50 and 1000 words";
    }
    if (!values.age) {
      errors.age = "*Age is required";
    } else if (!validateAge(formData.age)) {
      errors.age = "*Age should be between 14 and 100";
    }
   
    
    return errors;
  }

  function validateName(name) {
    const regex = /^[A-Z][a-zA-Z ]+$/;
    return regex.test(name);
  }
  
  function isUsernameStartsWithCapitalLetter(username) {
    const firstLetter = username.charAt(0);
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

  function validateAbout(about) {
    const words = about.trim().split(/\s+/);
    return words.length >= 50 && words.length <= 1000;
  }

  function handleNameKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\d/.test(keyValue)) {
      event.preventDefault();
    }
  }
  
  function validateAge(age) {
    return age >= 14 && age <= 100;
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
      Register yourself as Businessmen & Enlight the Future of Entrepreneurship!
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
        Ideax Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange}  className="idea"/>
      </label>
      {errors.username && <p className='error-msg'>{errors.username}</p>}
      
      <label className='name-label'>
        About Yourself:
        <input type="text" name="about" value={formData.about} onChange={handleInputChange} className='description'/>
      </label>
      {errors.about && <p className='error-msg'>{errors.about}</p>}
      
      <label className='name-label'>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} className=""price/>
      </label>
      {errors.age && <p className='error-msg'>{errors.age}</p>}
      
      
      <p>
        <BuyerDropZone />
      
      </p>
      
      <button type="submit" className='submitbtn'>Submit</button>
    
    </form>
        </Col>

        <Col>
        <img className='laptop-image' src={laptopimage} alt="laptop"/>
        </Col>


      </Row>
    </Container>
    </div>
    
    
    
  );
}

export default BuyerForm;

