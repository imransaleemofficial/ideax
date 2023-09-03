import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SellerForm from "./components/SellerForm/SellerForm";
import BuyerForm from "./components/BuyerForm/BuyerForm.js";
import FooterSection from "./components/FooterSection/footersection";
import SellerSide from "./components/SellerSide/SellerSide";
import PrivacyPolicy from "./components/IdeaxNavbar/PrivacyPolicy/PrivacyPolicy";
import UseOfCookies from "./components/FooterSection/UseOfCookies/UseOfCookies";
import PDFDownload from "./components/PDF/downloadPDF";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import "./App.css";
import IdeaxNavbar from "./components/IdeaxNavbar/IdeaxNavbar";
import BuyerSide from "./components/BuyerSide/BuyerSide";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Droid Sans",
          "Chilanka",
          "Droid Serif",
          "Oswald",
          "Roboto",
          "Inter",
          "Alkatra",
          "Fasthand",
          "Nunito",
        ],
      },
    });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      {/* <IdeaxNavbar/>  */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/entrepreneur"
            element={
              <ProtectedRoute>
                <SellerForm />
              </ProtectedRoute>
            }
          />
          <Route path="/investor" element={<BuyerForm />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/entrepreneurs"
            element={
              <ProtectedRoute>
                <SellerSide />
              </ProtectedRoute>
            }
          />
          <Route
            path="/businessmen"
            element={
              <ProtectedRoute>
                <BuyerSide />
              </ProtectedRoute>
            }
          />
          <Route
            path="/privacypolicy"
            element={
              <ProtectedRoute>
                <PrivacyPolicy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/useofcookies"
            element={
              <ProtectedRoute>
                <UseOfCookies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/termsofuse"
            element={
              <ProtectedRoute>
                <PDFDownload />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <FooterSection />
    </div>
  );
}

export default App;
