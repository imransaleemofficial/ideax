import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SellerForm from "./components/SellerForm/SellerForm";
import Mynav from "./components/Navbar/mynav";
import BuyerForm from "./components/BuyerForm/BuyerForm.js"
import FooterSection from "./components/FooterSection/footersection";
import SellerSide from "./components/SellerSide/SellerSide";
import PrivacyPolicy from "./components/IdeaxNavbar/PrivacyPolicy/PrivacyPolicy";
import UseOfCookies from "./components/FooterSection/UseOfCookies/UseOfCookies";
import PDFDownload from "./components/PDF/downloadPDF";

import 'bootstrap/dist/css/bootstrap.min.css';

import WebFont from 'webfontloader';

import { auth } from "./firebase";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Droid Serif',"Oswald", 
        "Roboto", "Inter", "Alkatra","Fasthand","Nunito" ]
      }
    });
   }, []);

  return (
    <div style={{overflow: "hidden"}}>
     
      {/* <IdeaxNavbar /> */}
      
      <Router>
        <Mynav/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/entrepreneur" element={<SellerForm />} />
          <Route path="/investor" element={<BuyerForm />} />
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/entrepreneurs" element={<SellerSide />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/useofcookies" element={<UseOfCookies />} />
          <Route path="/termsofuse" element={<PDFDownload />} />
        </Routes>
     
      </Router>

      <FooterSection />
    </div>
  );
}

export default App;