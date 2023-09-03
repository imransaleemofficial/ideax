import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../Home/Home.css';
import carousel_image_two from '../source/images/Homepage_images/carousel_image_two.jpg';
import carousel_image_three from '../Home/images/carousel_image_three.jpg';
import carousel_image_one from '../Home/images/carousel_image_one.jpg';

import FounderSlider from "./FounderSlider/FounderSlider";
import WhyWeDifferent from "./WhyWeDifferent/WhyWeDifferent";
import UserForm from "../UserForm/UserForm";


import { AiOutlineFileSearch } from 'react-icons/ai';
import IdeaxNavbar from "../IdeaxNavbar/IdeaxNavbar";

function Home(props) {
  return (
    <div>
      <IdeaxNavbar/>

      <h2 className="name-heading">
        <br></br>
        <br></br>
        {props.name ? `Welcome - ${props.name}` : "Login please"}
        <br></br>
        <br></br>
      </h2>
      
      <FounderSlider />
      <WhyWeDifferent />
      <UserForm />

      

    </div>
  );
}

export default Home;