import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../IdeaxNavbar/IdeaxNavbar.css";
import { AiOutlineFileSearch } from "react-icons/ai";

function IdeaxNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar-color">
      <Container fluid className="">
        <Navbar.Brand href="#" className="navbar-font">
          IDEAX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="home" className="navbar-font">
              Home
            </Nav.Link>
            <Nav.Link href="login" className='navbar-font'>Login</Nav.Link>
            <Nav.Link href="signup" className='navbar-font'>Signup</Nav.Link>
            <Nav.Link href="entrepreneurs" className="navbar-font">
              Entrepreneurs
            </Nav.Link>
            <Nav.Link href="businessmen" className="navbar-font">
              Businessmen
            </Nav.Link>
            <NavDropdown
              title="Register Yourself"
              id="navbarScrollingDropdown"
              className="navbar-font"
            >
              <NavDropdown.Item href="entrepreneur" className="navbar-font">
                AS ENTREPRENEUR
              </NavDropdown.Item>
              <NavDropdown.Item href="investor" className="navbar-font">
                AS INVESTOR
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="navbar-font">
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
            <Button
              className="input-search search button"
              variant="outline-dark"
            >
              <AiOutlineFileSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default IdeaxNavbar;

// import React, { useState } from "react";
// import { NavLink, Route, Switch } from 'react-router-dom';
// import '../IdeaxNavbar/IdeaxNavbar.css';
// import Login from '../Login/Login';
// import Home from '../Home/Home';
// import Signup from '../Signup/Signup';
// import SellerSide from '../SellerSide/SellerSide';
// import SellerForm from "../SellerForm/SellerForm";
// import BuyerForm from '../BuyerForm/BuyerForm';
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import {GiHamburgerMenu}  from "react-icons/gi";

// import { NavLink } from "react-router-dom";

// const IdeaxNavbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           <h2>
//             <span>I</span>deax
//             <span>W</span>ebsite
//           </h2>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <NavLink to="home">Home</NavLink>

//             </li>
//             <li>
//               <NavLink to="login">Login</NavLink>
//             </li>
//             <li>
//               <NavLink to="signup">Signup</NavLink>
//             </li>
//             <li>
//               <NavLink to="entrepreneurs">Entrepreneur</NavLink>
//             </li>
//             <li>
//               <NavLink to="entrepreneur">Register E</NavLink>
//             </li>
//             <li>
//               <NavLink to="investor">Register I</NavLink>
//             </li>
//           </ul>
//           <Switch>
//               <Route path="home" component={Home} />
//               <Route path="login" component={Login} />
//               <Route path="signup" component={Signup} />
//               <Route path="entrepreneurs" component={SellerSide} />
//               <Route path="entrepreneur" component={SellerForm} />
//               <Route path="investor" component={BuyerForm} />
//               </Switch>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaFacebookSquare className="facebook" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/thapatechnical/"
//                 target="_thapa">
//                 <FaInstagramSquare className="instagram" />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
//                 target="_thapa">
//                 <FaYoutubeSquare className="youtube" />
//               </a>
//             </li>
//           </ul>

//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* hero section  */}
//       {/* <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical</h1>
//       </section> */}
//     </>
//   );
// };

// export default IdeaxNavbar;
