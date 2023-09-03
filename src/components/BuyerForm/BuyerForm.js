import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import laptopimage from "../source/images/BuyerFormImage/laptop.jpg";
import IdeaxNavbar from "../IdeaxNavbar/IdeaxNavbar";

function BuyerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    description: "",
    price: "",
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
    alert("Form Submitted Successfully")

    // Check if there are any errors before submitting the form
    if (Object.keys(formErrors).length === 0) {
      const url = "http://localhost:8001/submit-form-bus";
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      try {
        const response = await fetch(url, {
          method: "POST",
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
      const response = await fetch("http://localhost:8001/businessmen");
      const data = await response.json();
      setBusinessmen(data);
    } catch (error) {
      console.error("Error fetching businessmen:", error);
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
      <h1 className="register-entrepreneur">
        <br></br>
        Register yourself as Businessmen & Rule the World!
      </h1>
      <br></br>
      <Container fluid>
        <Row>
          <Col>
            <form onSubmit={handleSubmit} className="sellerform">
              <label className="name-label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={handleNameKeyPress}
                  className="name"
                />
              </label>
              {errors.name && <p className="error-msg">{errors.name}</p>}

              <label className="name-label">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="email"
                />
              </label>
              {errors.email && <p className="error-msg">{errors.email}</p>}

              <label className="name-label">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyPress={handlePhoneKeyPress}
                  className="phone"
                />
              </label>
              {errors.phone && <p className="error-msg">{errors.phone}</p>}

              <label className="name-label">
                Username:
                <input
                  type="text"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  className="idea"
                />
              </label>
              {errors.idea && <p className="error-msg">{errors.idea}</p>}

              <label className="name-label">
                Write what you are looking for?
                <textarea
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="description"
                />
              </label>
              {/* {errors.description && <p className='error-msg'>{errors.description}</p>} */}

              <label className="name-label">
                Price Range:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="price"
                />
              </label>
              {errors.price && <p className="error-msg">{errors.price}</p>}
              <p>
                <br></br>
                <label className="name-label">Upload File:</label>
                <input
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                />
              </p>
              <button type="submit" className="submitbtn">
                Submit
              </button>
            </form>
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="req-line-font">
                  Click to see Requirements to fill the form.
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <br></br>
                    **************************************************************************************
                    <p>
                      !REQUIREMENTS TO FILL THE FORM!
                      <br></br>
                      <br></br>
                      1. All fields are required. You need to fill all fields to
                      continue.
                      <br></br>
                      2. Name should start with a capital letter and only
                      contain letters and spaces.
                      <br></br>
                      3. Phone number should have between 7 to 15 digits
                      <br></br>
                      4. Phone number should have between 7 to 15 digits
                      <br></br>
                      5. Idea Name should start with a capital letter
                      <br></br>
                      6. About Yourself should contain between 50 and 1000 words
                      <br></br>
                      7. Price must be a positive number greater than zero
                      <br></br>
                    </p>
                    ***************************************************************************************
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <img
              className="laptop-image-seller"
              src={laptopimage}
              alt="laptop"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuyerForm;
