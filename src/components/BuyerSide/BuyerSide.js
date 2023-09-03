import React, { useState, useEffect } from 'react';
import '../BuyerSide/BuyerSide.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaxNavbar from '../IdeaxNavbar/IdeaxNavbar';


function limitWords(text, limit) {
    const words = text.split(' ');
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(' ');
  }

function BuyerSide() {
    useEffect(() => {
    fetchBusinessmen();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    description: '',
    price: '',
    image: null,
  });

  const [businessmen, setBusinessmen] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    const formErrors = validation(formData);
    setErrors(formErrors);

    // Check if there are any errors before submitting the form
    if (Object.keys(formErrors).length === 0) {
      const url = 'http://localhost:8001/submit-form-bus';
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
          // Fetch the updated businessmen list from the server.
          fetchBusinessmen();
        } else {
          // Handle error cases (e.g., show an error message).
        }
      } catch (error) {
        // Handle network errors (e.g., show an error message).
      }
    }
  };

  // Form validation function (add your custom validation logic)
  const validation = (values) => {
    const errors = {};
    // Add your validation logic here
    return errors;
  };

  // Your fetchBusinessmen function
  const fetchBusinessmen = async () => {
    try {
      const response = await fetch('http://localhost:8001/businessmen');
      const data = await response.json();
      setBusinessmen(data);
    } catch (error) {
      console.error('Error fetching businessmen:', error);
    }
  };

  // Your handleNameKeyPress function
  const handleNameKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\d/.test(keyValue)) {
      event.preventDefault();
    }
  };

  // Your handlePhoneKeyPress function
  const handlePhoneKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/\d/.test(keyValue)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    fetchBusinessmen();
  }, []);

  return (
    <div>
        <IdeaxNavbar/>
     <h2>Businessman Section</h2>


           <> 
         
            <div className='container'>
                <div className='row'>
                    {businessmen.map((bu, idx) => (
                    <div key={idx} className='col-md-4 mb-4'>
                        <div className='card text-center bg-dark'>
                        <img src="" alt={`Card ${idx}`} />
                        <div className='card-body text-light'>
                            <h4 className='card-title'>{bu.name}</h4>
                            <p className='card-text text-secondary'>{limitWords(bu.description, 20)}...click below to continue</p>
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
  );
}

export default BuyerSide;