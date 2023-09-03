
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import '../SellerSide/SellerSide.css';
import IdeaxNavbar from '../IdeaxNavbar/IdeaxNavbar';

function limitWords(text, limit) {
  const words = text.split(' ');
  const limitedWords = words.slice(0, limit);
  return limitedWords.join(' ');
}


function SellerSide() {

  const cardStyle = {
    height: '200px', // Set the desired height here (example: 200px)
    // Add other custom styles if needed
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    idea: '',
    description: '',
    price: '',
  }
  const [data, setdata] = useState([]);
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



  function handleNameKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\d/.test(keyValue)) {
      event.preventDefault();
    }
  }

  

 

    const [ideas, setIdeas] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, document: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8000/submit-form';
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Form submitted successfully. Do something here (e.g., show a success message).
        // Fetch the updated ideas list from the server.
        fetchIdeas();
      } else {
        // Handle error cases (e.g., show an error message).
      }
    } catch (error) {
      // Handle network errors (e.g., show an error message).
    }
  };

  const fetchIdeas = async () => {
    try {
      const response = await fetch('http://localhost:8000/ideas');
      const data = await response.json();
      setIdeas(data);
    } catch (error) {
      console.error('Error fetching ideas:', error);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  function handlePhoneKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\D/.test(keyValue)) {
      event.preventDefault();
    }
  }

  return (
    <div>
      <IdeaxNavbar/>
  
  <h2>Entrepreneurs Section</h2>
  {/* <section className='card-container'>
    <section className='card'>
      <img src='' alt=''></img>
       <div className='card-details'>
        <h3></h3>
       </div>
    </section>
  </section> */}
 
{/*   
  {ideas.map((idea, idx) => (
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {idea?.idea}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {idea.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
     ))} */}



           <>          

           <div className='container'>
                <div className='row'>
                {ideas.map((idea, idx) => (
                    <div key={idx} className='col-md-4 mb-4'>
                        <div className='card text-center bg-dark'>
                        <img src="" alt={`Card ${idx}`} />
                        <div className='card-body text-light'>
                            <h4 className='card-title'>{idea.idea}</h4>
                            <p className='card-text text-secondary'>{idea.price}</p>
                            <p className='card-text text-secondary'>{limitWords(idea.description, 20)}...click below to continue</p>
                            <a href='#' className='btn btn-outline-secondary rounded-0 custom-link'>
                            Click for Contact
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </>
   
    </div>
  )
}

export default SellerSide;
