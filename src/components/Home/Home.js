import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import '../Home/Home.css';

import carousel_image from '../source/images/Homepage_images/carousel_image_one.jpg';
import carousel_image_two from '../source/images/Homepage_images/carousel_image_two.jpg';
import carousel_image_three from '../Home/images/carousel_image_three.jpg';
import carousel_image_one from '../Home/images/carousel_image_one.jpg';

import FounderSlider from "./FounderSlider/FounderSlider";
import WhyWeDifferent from "./WhyWeDifferent/WhyWeDifferent";
import UserForm from "../UserForm/UserForm";

import { AiOutlineFileSearch } from 'react-icons/ai';

function Home(props) {
  return (
    <div>
      <Carousel>
        
        <Carousel.Item>
        <img
          className="d-block w-100 cover-image"
          src={carousel_image_three}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='h1'>#! IDEAX Buying & Selling Marketplace Globally. 
          <br/>
          <br/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 borders search font search-bar"
              aria-label="Search"
            />
            <Button className='input-search search button' variant="outline-light"><AiOutlineFileSearch /></Button>
          </Form>
          </h1>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100 cover-image"
          src={carousel_image_one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='h1'>#! IDEAX Buying & Selling Marketplace. 
          <br/>
          <br/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 borders search font"
              aria-label="Search"
            />
            <Button className='input-search search button' variant="outline-light"><AiOutlineFileSearch /></Button>
          </Form>
          </h1>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100 cover-image"
          src={carousel_image_two}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='h1 c2-h1'>#! IDEAX Buying & Selling Marketplace. 
          <br/>
          <br/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 borders search font"
              aria-label="Search"
            />
            <Button className='input-search search button' variant="outline-dark"><AiOutlineFileSearch /></Button>
          </Form>
          </h1>
        </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      <h2 className="name-heading">
        <br></br>
        <br></br>
        {props.name ? `Welcome - ${props.name}` : "Login please"}
        <br></br>
        <br></br>
        <h1 className="founderstext">FOUNDERS</h1>
      </h2>
      
      <FounderSlider />
      <WhyWeDifferent />
      <UserForm />

      

    </div>
  );
}

export default Home;